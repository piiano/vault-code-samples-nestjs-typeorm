import {
  FindManyOptions,
  FindOneOptions,
  getMetadataArgsStorage,
  MongoRepository,
  ObjectID,
  ObjectLiteral,
  Repository,
  UpdateResult,
} from "typeorm";
import { ExtendedColumnOptions } from "./options";
import * as sdk from "@pvault-sdk";

const reason = "AppFunctionality";
sdk.OpenAPI.TOKEN = "pvaultauth";

export class PvaultMongoRepository<
  Entity extends ObjectLiteral
> extends MongoRepository<Entity> {
  readonly manager: any;
  readonly metadata: any;
  readonly queryRunner: any;
  private readonly PvaultService: PvaultWp<Entity>;

  constructor(collection: string, originalRepo: MongoRepository<Entity>) {
    super();
    this.manager = originalRepo.manager;
    this.metadata = originalRepo.metadata;
    this.queryRunner = originalRepo.queryRunner;
    this.PvaultService = new PvaultWp(collection);
  }

  async find(
    optionsOrConditions?: FindManyOptions<Entity> | Partial<Entity>
  ): Promise<Entity[]> {
    const result = await super.find(optionsOrConditions);

    return Promise.all(result.map((e) => this.PvaultService.from(e)));
  }

  async findOne(
    optionsOrConditions?:
      | string
      | number
      | Date
      | ObjectID
      | FindOneOptions<Entity>
      | Partial<Entity>,
    maybeOptions?: FindOneOptions<Entity>
  ): Promise<Entity | undefined> {
    const result = await super.findOne(optionsOrConditions, maybeOptions);

    return result && this.PvaultService.from(result);
  }
}

export class PvaultWp<Entity extends ObjectLiteral> {
  public readonly collection: string;

  constructor(collection: string) {
    this.collection = collection;
  }

  async insertAndPrepareEntity(entity: Entity): Promise<{
    entity: Entity;
    vaultObj?: Record<string, any>;
    vaultId?: string;
  }> {
    // Return if there is no entity.
    if (!entity) {
      return { entity };
    }

    // Prepare Vault object from entity configuration.
    const pvaultObj = await filterOnlyVaultProps(entity);
    pvaultObj["_foreign_id"] = entity["id"];

    // Add object.
    const addObjRes = await sdk.ObjectsService.addObject(
      this.collection,
      reason,
      pvaultObj
    );

    // Tokenize entity fields according to configuration.
    await walkEntityVaultProps(entity, async (curEntity, propertyName) => {
      const token = await sdk.TokensService.tokenize(this.collection, reason, {
        object_ids: [addObjRes._id || ""],
        props: [propertyName],
        reversible: true,
        reuse_token_id: true,
        type: sdk.TokenizeRequest.type.VALUE,
      });

      curEntity[propertyName] = token[0].token_id;
    });

    return {
      entity,
      vaultObj: await filterOnlyVaultProps(entity),
      vaultId: addObjRes._id,
    };
  }

  async updateAndPrepareEntity(id: string, entity: Entity): Promise<Entity> {
    const vaultObj = await this.getVaultIdByForeign(id);

    // Remove all previous tokens of the object.
    await sdk.TokensService.deleteTokens(
      this.collection,
      reason,
      vaultObj._id,
      null,
      null
    );

    // Update the Vault object.
    await sdk.ObjectsService.updateObjectById(
      this.collection,
      vaultObj._id,
      reason,
      await filterOnlyVaultProps(entity)
    );

    // Re-tokenize entity fields according to configuration.
    await walkEntityVaultProps(entity, async (curEntity, propertyName) => {
      const token = await sdk.TokensService.tokenize(this.collection, reason, {
        object_ids: [vaultObj._id],
        props: [propertyName],
        reversible: true,
        reuse_token_id: true,
        type: sdk.TokenizeRequest.type.VALUE,
      });

      curEntity[propertyName] = token[0].token_id;
    });

    return entity;
  }

  async from(entity: Entity): Promise<Entity> {
    if (!entity) {
      return entity;
    }

    await walkEntityVaultProps(entity, async (curEntity, propertyName) => {
      const detokenized = await sdk.TokensService.detokenize(
        this.collection,
        reason,
        undefined,
        undefined,
        undefined,
        [curEntity[propertyName]]
      );

      curEntity[propertyName] = detokenized[0].fields[propertyName];
    });

    return entity;
  }

  async getVaultIdByMatch(
    match: Record<string, any>,
    props?: string[]
  ): Promise<Record<string, any> | undefined> {
    const vaultObj = await sdk.ObjectsService.searchObjects(
      this.collection,
      reason,
      {
        match,
      },
      null,
      null,
      null,
      null,
      null,
      null,
      props || ["_id"],

    );

    const result = vaultObj?.results[0];
    if (!result)
      throw Error(`Vault object not found with keys: ${Object.keys(match)}`);

    return result;
  }

  async getVaultIdByForeign(
    foreignId: string,
    props?: string[]
  ): Promise<Record<string, any> | undefined> {
    return this.getVaultIdByMatch(
      {
        _foreign_id: foreignId,
      },
      props
    );
  }

  async updateForeignId(id: string, vaultId: string) {
    await sdk.ObjectsService.updateObjectById(
      this.collection,
      [vaultId],
      reason,
      {
        _foreign_id: id,
      } as sdk.Object
    );
  }

  async removeForeignId(id: string) {
    const vaultObj = await this.getVaultIdByForeign(id);

    await sdk.ObjectsService.deleteObjectById(
      this.collection,
      [vaultObj._id],
      reason
    );
  }

  async tokenizeSingle(propName: string, value: string): Promise<string> {
    const vaultObj = await this.getVaultIdByMatch({
      [propName]: value,
    });

    // Tokenize the email again to the the token.
    const token = await sdk.TokensService.tokenize(this.collection, reason, {
      object_ids: [vaultObj._id],
      props: [propName],
      reversible: true,
      reuse_token_id: true,
      type: sdk.TokenizeRequest.type.VALUE,
    });

    if (token.length == 0) {
      throw Error(`Failed tokenizing property: ${propName}`);
    }

    return token[0].token_id;
  }

  safeRepository(
    input: MongoRepository<Entity>
  ): PvaultMongoRepository<Entity> {
    return new PvaultMongoRepository(this.collection, input);
  }
}

async function filterOnlyVaultProps<T>(entity: T): Promise<any> {
  const out = {};
  await walkEntityVaultProps(entity, async (curEntity, name) => {
    out[name] = curEntity[name];
  });

  return out;
}

async function walkEntityVaultProps<T>(
  entity: T,
  cb: (entity: any, propertyName: string) => Promise<void>
) {
  for (const prop in entity) {
    if (isObject(entity[prop])) {
      await walkEntityVaultProps(entity[prop], cb);
    }

    for (let columnMetadata of getMetadataArgsStorage().columns) {
      let { propertyName, mode, target } = columnMetadata;
      let options = columnMetadata.options as ExtendedColumnOptions;
      if (
        prop == propertyName &&
        options?.tokenize &&
        mode === "regular" &&
        (entity?.constructor === target || options.parent == target)
      ) {
        await cb(entity, propertyName);
      }
    }
  }
}

function isObject(input: any): boolean {
  return typeof input === "object" && input !== null;
}

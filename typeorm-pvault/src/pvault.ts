import { getMetadataArgsStorage } from "typeorm";
import { ExtendedColumnOptions } from "./options";
import * as sdk from "../../pvault-sdk/dist/src";

const reason = "AppFunctionality";
sdk.OpenAPI.TOKEN = "pvaultauth";

export class PvaultWp {
  static async to<T>(entity: T, collection: string): Promise<T> {
    if (!entity) {
      return entity;
    }

    const ret: T = { ...entity };
    const tokenizeProps = [];
    for (let columnMetadata of getMetadataArgsStorage().columns) {
      let { propertyName, mode, target } = columnMetadata;
      let options = columnMetadata.options as ExtendedColumnOptions;
      let shouldTokenize = options.tokenize;
      if (
        shouldTokenize &&
        mode === "regular" &&
        entity.constructor === target
      ) {
        tokenizeProps.push(propertyName);
      }
    }

    if (tokenizeProps.length == 0) {
      return entity;
    }

    const obj: any = await sdk.ObjectsService.addObject(
      collection,
      reason,
      Object.fromEntries(
        Object.entries(entity).filter(([key]) => tokenizeProps.includes(key))
      )
    );

    for (const propertyName of tokenizeProps) {
      const token = await sdk.TokensService.tokenize(collection, reason, {
        object_ids: [obj._id || ""],
        props: [propertyName],
        reversible: true,
        reuse_token_id: true,
        type: sdk.models_TokenizeRequest.type.POINTER,
      });

      ret[propertyName] = token[0].token_id;
    }

    return ret;
  }

  static async from<T>(entity: T, collection: string): Promise<T> {
    if (!entity) {
      return entity;
    }

    for (let columnMetadata of getMetadataArgsStorage().columns) {
      let { propertyName, mode, target } = columnMetadata;
      let options = columnMetadata.options as ExtendedColumnOptions;
      let shouldTokenize = options.tokenize;

      if (
        shouldTokenize &&
        mode === "regular" &&
        entity.constructor === target
      ) {
        const detokenized = await sdk.TokensService.detokenize(
          collection,
          reason,
          undefined,
          undefined,
          undefined,
          [entity[propertyName]]
        );

        entity[propertyName] = detokenized;
      }
    }
    return entity;
  }
}

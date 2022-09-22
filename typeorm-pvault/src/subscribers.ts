import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
  getMetadataArgsStorage,
} from "typeorm";
import { ExtendedColumnOptions } from "./options";
import { Buffer } from "buffer";

@EventSubscriber()
export class PvaultTokenSubscriber implements EntitySubscriberInterface {
  /**
   * Encrypt before insertion.
   */
  async beforeInsert(event: InsertEvent<any>): Promise<void> {
    if (!event.entity) {
      return event.entity;
    }

    for (let columnMetadata of getMetadataArgsStorage().columns) {
      let { propertyName, mode, target } = columnMetadata;
      let options = columnMetadata.options as ExtendedColumnOptions;

      if (options.tokenize && mode === "regular") {
        event.entity[propertyName] = Buffer.from(
          event.entity[propertyName]
        ).toString("base64");
      }
    }
  }

  /**
   * Encrypt before update.
   */
  beforeUpdate(event: UpdateEvent<any>): void {}

  /**
   * Decrypt after find.
   */
  async afterLoad(entity: any): Promise<void> {
    if (!entity) {
      return entity;
    }

    for (let columnMetadata of getMetadataArgsStorage().columns) {
      let { propertyName, mode, target } = columnMetadata;
      let options = columnMetadata.options as ExtendedColumnOptions;

      if (options.tokenize && mode === "regular") {
        entity[propertyName] = Buffer.from(
          entity[propertyName],
          "base64"
        ).toString("utf8");
      }
    }
  }
}

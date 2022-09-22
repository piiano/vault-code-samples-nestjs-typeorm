import { ValueTransformer, FindOperator, In, Equal, Not } from "typeorm";
import { addObject, tokenize, detokenize } from "../../pvault-sdk";
import { Buffer } from "buffer";

export class PvaultTokenTransformer implements ValueTransformer {
  //   constructor(private options: EncryptionOptions) {}

  public from(value?: string | null): string | undefined {
    console.log("from");

    if (!value) {
      return;
    }

    return Buffer.from(value, "base64").toString("utf8");
  }

  public async to(
    value?: string | FindOperator<any> | null
  ): Promise<string | FindOperator<any> | undefined> {
    console.log("to");
    if ((value ?? null) === null) {
      return;
    }
    if (typeof value === "string") {
      return Buffer.from(value).toString("base64");
    }
    if (!value) {
      return;
    }
    // Support FindOperator.
    // Just support "Equal", "In", "Not", and "IsNull".
    // Other operators aren't work correctly, because values are encrypted on the db.
    // if (value.type === `in`) {
    //   return In(
    //     (value.value as string[]).map((s) =>
    //       encryptData(Buffer.from(s, "utf-8"), this.options).toString("base64")
    //     )
    //   );
    // } else if (value.type === "equal") {
    //   return Equal(
    //     encryptData(
    //       Buffer.from(value.value as string, "utf-8"),
    //       this.options
    //     ).toString("base64")
    //   );
    // } else if (value.type === "not") {
    //   return Not(this.to(value.child ?? value.value));
    // } else if (value.type === "isNull") {
    //   return value;
    // } else {
    //   throw new Error(
    //     'Only "Equal","In", "Not", and "IsNull" are supported for FindOperator'
    //   );
    // }
  }
}

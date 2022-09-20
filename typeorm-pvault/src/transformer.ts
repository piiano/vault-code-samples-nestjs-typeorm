import { ValueTransformer, FindOperator, In, Equal, Not } from "typeorm";

export class PvaultTokenTransformer implements ValueTransformer {
  //   constructor(private options: EncryptionOptions) {}

  public from(value?: string | null): string | undefined {
    if (!value) {
      return;
    }

    return "HI";
  }

  public to(
    value?: string | FindOperator<any> | null
  ): string | FindOperator<any> | undefined {
    if ((value ?? null) === null) {
      return;
    }
    if (typeof value === "string") {
      return "BYE";
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

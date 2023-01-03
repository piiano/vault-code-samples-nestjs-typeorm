import { describe, it } from "mocha";
import { expect } from "chai";
import {
  CollectionsService,
  Collection,
  TokenizeRequest,
  ObjectsService,
  TokensService,
  OpenAPI,
  Object,
} from "../src";

const reason = "AppFunctionality";
OpenAPI.TOKEN = "pvaultauth";

describe("Sanity", function () {
  this.timeout(10000);

  it("sanity roundtrip", async function () {
    // Create collection.
    const coll = await CollectionsService.addCollection( {
      name: "pp5",
      type: Collection.type.PERSONS,
      properties: [
        {
          name: "email",
          pii_type_name: "EMAIL"
        },
        {
          name: "name",
          pii_type_name: "NAME"
        },
      ],
    }, "json");

    // const coll: any = {
    //   name: "pp5",
    // };

    // Add object.
    const objInput = {
      email: "aaa@gmail.com",
      name: "ddd",
    };
    const obj: any = await ObjectsService.addObject(
      coll.name,
      reason,
      objInput as Object
    );
    // Tokenize.
    const token = await TokensService.tokenize(coll.name, reason, {
      object_ids: [obj.id || ""],
      props: ["email"],
      reversible: true,
      type: TokenizeRequest.type.VALUE,
    });
    // Detokenize.
    const detokenized = await TokensService.detokenize(
      coll.name,
      reason,
      undefined,
      undefined,
      undefined,
      [token[0].token_id]
    );
    expect(detokenized).to.have.length.greaterThan(0);
    expect(detokenized[0]).to.not.be.undefined;
    const fields: any = detokenized[0].fields;
    expect(fields["email"]).to.not.be.undefined;
    expect(objInput["email"]).to.equal(fields["email"]);
  });
});

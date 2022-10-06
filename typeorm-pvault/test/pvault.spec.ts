import { afterEach, beforeEach, describe, it } from "mocha";
import { expect } from "chai";
import * as chai from "chai";
chai.use(require("chai-uuid"));
import { Entity, Column, ObjectIdColumn } from "typeorm";
import { plainToClass } from "class-transformer";
import * as utils from "./utils";
import { ExtendedColumnOptions, PvaultWp } from "../src";
import * as sdk from "@pvault-sdk";

const collection = "users";

class Contact {
  @Column(<ExtendedColumnOptions>{
    tokenize: true,
  })
  ssn: string;

  @Column({
    nullable: true,
  })
  age: number;
}

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column({
    nullable: true,
  })
  userName: string;

  @Column({
    nullable: true,
  })
  password: string;

  @Column({
    nullable: true,
  })
  firstName: string;

  @Column({
    nullable: true,
  })
  lastName: string;

  @Column(<ExtendedColumnOptions>{
    tokenize: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  country: string;

  @Column({
    nullable: true,
  })
  contact: Contact;
}

describe("Pvault", function () {
  const PvaultService = new PvaultWp(collection);

  this.timeout(1000 * 30); // 30sec.

  beforeEach(async () => {
    // Start Vault.
    await utils.run(
      `docker run --rm \
    --name pvault-dev \
    -p 8123:8123 \
    -e PVAULT_DEVMODE=true \
    -e PVAULT_SERVICE_LICENSE=${process.env.PVAULT_SERVICE_LICENSE} \
    -d \
    piiano/pvault-dev:0.9.6`
    );
    await utils.run(`sleep 5`);

    // Initialize Vault with a Persons collection.
    await utils.run(`docker exec -i pvault-dev pvault collection add --collection-pvschema "
    ${collection} PERSONS (
        email EMAIL,
        ssn SSN NULL,
    )"`);
  });

  afterEach(async () => {
    // Clean PVault docker container.
    await utils.run("docker rm -f pvault-dev");
  });

  it("from-to", async function () {
    // Create base user.
    const newUser = plainToClass(User, {
      email: "aaa@gmail.com",
      country: "GM",
      contact: plainToClass(Contact, {
        ssn: "123-12-1235",
        age: 80,
      }),
    });
    const original = JSON.parse(JSON.stringify(newUser));

    // Protect it - Tokenize relevant fields.
    const { entity: protectedUser } =
      await PvaultService.insertAndPrepareEntity(newUser);

    // Detokenize and make sure it equals to the original.
    const returnedUser = await PvaultService.from(protectedUser);

    expect(JSON.stringify(protectedUser)).to.equal(JSON.stringify(original));
    expect(returnedUser).to.equal(protectedUser);
  });

  it("insert-get-delete", async function () {
    // Create base user.
    const foreignId = "XXXXXX";
    const newUser = plainToClass(User, {
      email: "aaa@gmail.com",
      country: "GM",
      id: foreignId,
    });

    // Insert user.
    await PvaultService.insertAndPrepareEntity(newUser);

    // Make sure it is stored on Vault as well.
    let listOfVaultObjs = await sdk.ObjectsService.getObjects(
      collection,
      "AppFunctionality",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      ["unsafe"]
    );
    expect(listOfVaultObjs.results).to.not.be.undefined;
    expect(listOfVaultObjs.results!.length).to.equal(1);

    // Get the user by foreign id.
    await PvaultService.getVaultIdByForeign(foreignId);

    // Delete the user.
    await PvaultService.removeForeignId(foreignId);

    // Make sure it's deleted from Vault.
    listOfVaultObjs = await sdk.ObjectsService.getObjects(
      collection,
      "AppFunctionality",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      ["unsafe"]
    );
    expect(listOfVaultObjs.results).to.not.be.undefined;
    expect(listOfVaultObjs.results!.length).to.equal(0);
  });

  it("search", async function () {
    // Create base user.
    const newUser = plainToClass(User, {
      email: "aaa@gmail.com",
      country: "GM",
    });
    const original = JSON.parse(JSON.stringify(newUser));

    await PvaultService.insertAndPrepareEntity(newUser);

    // Search the user.
    const fetchedUser = await PvaultService.getVaultIdByMatch(
      {
        email: original.email,
      },
      ["email"] // Get the email property.
    );
    expect(fetchedUser).to.not.be.undefined;

    for (const propName in fetchedUser) {
      expect(fetchedUser![propName]).to.equal(original[propName]);
    }
  });

  it("update", async function () {
    // Insert user.
    const foreignId = "XXXXXX";
    const newUser = plainToClass(User, {
      email: "aaa@gmail.com",
      country: "GM",
      id: foreignId,
    });
    const toUpdate = plainToClass(User, { ...newUser });

    await PvaultService.insertAndPrepareEntity(newUser);

    // Update.
    toUpdate.firstName = "ZORG";
    toUpdate.email = "bbb@gmail.com";
    const original = plainToClass(User, { ...toUpdate });
    await PvaultService.updateAndPrepareEntity(foreignId, toUpdate);

    // Search the user.
    const fetchedUser = await PvaultService.getVaultIdByForeign(foreignId, [
      "email",
    ]);
    expect(fetchedUser).to.not.be.undefined;

    for (const propName in fetchedUser) {
      expect(fetchedUser![propName]).to.equal(original[propName]);
    }
  });
});

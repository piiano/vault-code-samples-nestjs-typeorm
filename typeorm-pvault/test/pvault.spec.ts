import { afterEach, beforeEach, after, describe, it } from "mocha";
import { expect } from "chai";
import * as chai from "chai";
chai.use(require("chai-uuid"));
import {
  Entity,
  DataSource,
  PrimaryGeneratedColumn,
  Column,
  SimpleConsoleLogger,
} from "typeorm";
import { plainToClass } from "class-transformer";
import * as utils from "./utils";
import {
  ExtendedColumnOptions,
  PvaultTokenTransformer,
  PvaultWp,
} from "../src";

const collection = "users";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(<ExtendedColumnOptions>{
    tokenize: true,
  })
  email: string;

  @Column()
  country: string;
}

describe("Pvault", function () {
  let connection: DataSource;

  this.timeout(10000);

  beforeEach(async () => {
    connection = new DataSource({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [User],
      synchronize: true,
      logging: false,
    });

    // Initialize a connection to the storage.
    await connection.initialize();

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
    )"`);
  });

  afterEach(async () => {
    await connection.destroy();
  });

  after(async function () {
    // Clean PVault docker container.
    await utils.run("docker rm -f pvault-dev");
  });

  it("sanity roundtrip", async function () {
    const repo = await connection.getRepository(User);

    // Create base user.
    const newUser = plainToClass(User, {
      email: "aaa@gmail.com",
      country: "GM",
    });

    // Protect it - Tokenize relevant fields.
    const protectedUser = await PvaultWp.to(newUser, collection);

    // Insert.
    await repo.insert(protectedUser);

    // Fetch from DB and make sure that it is actually tokenized.
    const results = await repo.find();
    expect(results.length).to.equal(1);
    expect(results[0].email).to.not.equal(newUser.email);
    expect(results[0].email).to.equal(protectedUser.email);
    expect(results[0].email).to.be.a.uuid("v4");

    // Detokenize and make sure it equals to the original.
    const returnedUser = await PvaultWp.from(protectedUser, collection);
    expect(returnedUser).to.equal(protectedUser);
  });
});

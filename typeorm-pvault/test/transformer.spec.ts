import { afterEach, beforeEach, describe, it } from "mocha";
import { expect } from "chai";
import { Entity, DataSource, PrimaryGeneratedColumn, Column } from "typeorm";
import { PvaultTokenTransformer } from "../src";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    transformer: new PvaultTokenTransformer(),
  })
  email: string;

  @Column()
  country: string;
}

describe("Transformer", function () {
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

    await connection.initialize();
  });

  afterEach(async () => {
    await connection.destroy();
  });

  it("sanity roundtrip", async function () {
    const repo = await connection.getRepository(User);

    const newUser = {
      email: "aaa@gmail.com",
      country: "GM",
    };

    await repo.insert(newUser);

    const results = await repo.find();

    expect(results.length).to.equal(1);
    expect(results[0].email).to.equal(newUser.email);
    expect(results[0].country).to.equal(newUser.country);
  });
});

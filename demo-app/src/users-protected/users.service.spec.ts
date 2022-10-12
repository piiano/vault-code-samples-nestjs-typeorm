import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnection, getMongoRepository, MongoRepository } from 'typeorm';
import { ProtectedUser } from './entities/user.entity';
import { UsersService } from './users.service';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as utils from '../../test/utils';
import { UserCreateInput } from './dto/create-user.dto';
import { afterEach, beforeEach, before, describe, it } from 'mocha';
import { expect } from 'chai';
import * as chai from 'chai';
import { plainToClass } from 'class-transformer';
import { UpdateUserDto } from './dto/update-user.dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
chai.use(require('chai-uuid'));

const collection = 'users';

describe('UsersService', function () {
  let mongod: MongoMemoryServer;
  let service: UsersService;
  let repo: MongoRepository<ProtectedUser>;

  this.timeout(1000 * 30); // 30sec.

  before(async () => {
    mongod = await MongoMemoryServer.create();
    await mongod.stop();
  });

  beforeEach(async () => {
    await mongod.start();

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          url: mongod.getUri(),
          type: 'mongodb',
          ssl: false,
          synchronize: true,
          entities: [ProtectedUser],
          useUnifiedTopology: true,
        } as MongoConnectionOptions),
        TypeOrmModule.forFeature([ProtectedUser]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = getMongoRepository(ProtectedUser, getConnection().name);

    // Start Vault.
    await utils.run(
      `docker run --rm \
    --name pvault-dev \
    -p 8123:8123 \
    -e PVAULT_DEVMODE=true \
    -e PVAULT_SERVICE_LICENSE=${process.env.PVAULT_SERVICE_LICENSE} \
    -d \
    piiano/pvault-dev:0.9.6`,
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
    await getConnection().close();
    await mongod.stop();

    // Clean PVault docker container.
    await utils.run('docker rm -f pvault-dev');
  });

  it('insert-get-delete"', async () => {
    // Insert user.
    const originalUser = {
      country: 'NL',
      contact: {
        email: 'aaa@gmail.com',
      },
    } as UserCreateInput;

    const user = await service.create({ ...originalUser });
    const userId = user['_id'].toString();

    const storedUser = await repo.findOne(userId);
    // Make sure that the user's country (non-protected) is stored as clear-text.
    expect(storedUser?.country).to.equal(originalUser.country);
    // Make sure that the user's email (nested and protected) is protected.
    expect(storedUser?.contact.email).to.be.a.uuid('v4');

    // Read from DB and make sure we get the value transparently.
    const fetchedUser = await service.findById(userId);
    expectEqualEntities(fetchedUser, originalUser);

    // Delete the user.
    await service.deleteById(userId);

    // Make sure it's deleted from the DB.
    const maybeDeletedUser = await repo.findOne(userId);
    expect(maybeDeletedUser).to.be.undefined;
  });

  it('search', async function () {
    // Insert user.
    const originalUser = {
      country: 'NL',
      contact: {
        email: 'aaa@gmail.com',
      },
    } as UserCreateInput;

    await service.create({ ...originalUser });

    // Search the user by a protected field.
    const fetchedUser = await service.findByEmail(originalUser.contact.email);
    // Make sure that fetched user is the original user.
    expectEqualEntities(fetchedUser, originalUser);
  });

  it('list', async function () {
    // Insert many users.
    const originalUsers = [
      { contact: { email: 'aaa@gmail.com' }, country: '11' },
      { contact: { email: 'bbb@gmail.com' }, country: '22' },
      { contact: { email: 'ccc@gmail.com' }, country: '33' },
    ];
    await Promise.all(originalUsers.map(service.create.bind(service)));

    // List all users.
    let fetchedList = await service.listAll();
    fetchedList = fetchedList.sort((a, b) =>
      a.contact.email < b.contact.email ? -1 : 1,
    );

    // Compare one by one make sure that fetching the users with the service returns the original users.
    for (let i = 0; i < originalUsers.length; i++) {
      const newUser = originalUsers[i];
      const fetchedUser = fetchedList[i];

      expectEqualEntities(fetchedUser, newUser);
    }
  });

  it('update', async () => {
    // Insert user.
    const originalUser = {
      country: 'NL',
      contact: {
        email: 'aaa@gmail.com',
      },
    } as UserCreateInput;

    const user = await service.create({ ...originalUser });

    // Update.
    const toUpdate = {
      ...originalUser,
      username: 'XBTZ',
      contact: {
        firstName: '123',
        email: 'bbb@gmail.com',
      },
    };
    await service.updateById(
      user['_id'].toString(),
      plainToClass(UpdateUserDto, { ...toUpdate }),
    );

    const results = await repo.find();
    // Make sure that the user is still stored.
    expect(results.length).to.equal(1);
    // Make sure that the username (non-protected) was upserted.
    expect(results[0].username).to.equal(toUpdate.username);
    // Make sure that the firstName (nested and non-protected) was upserted.
    expect(results[0].contact.firstName).to.equal(toUpdate.contact.firstName);
    // Make sure that the email was updated.
    expect(results[0].contact.email).to.not.equal(originalUser.contact.email);
    // Make sure that the email is still a UUID, which means it's a token.
    expect(results[0].contact.email).to.be.a.uuid('v4');
    // Make sure that fetching the user with the service returns the original user.
    const fetchedUser = await service.findById(user['_id'].toString());
    expectEqualEntities(fetchedUser, toUpdate);
  });
});

function expectEqualEntities(
  fetchedUser: Record<string, any>,
  originalUser: Record<string, any>,
) {
  for (const propName in originalUser) {
    expect(fetchedUser[propName]).to.deep.equal(originalUser[propName]);
  }
}

## How to integrate a NestJS/TypeORM project to use Vault

Vault exposes REST API so you can integrate with it in anyway your are usually dealing with REST APIs. To ease the integration, we recommend using `typeorm-pvault`.

Full example is at [demo-app](/demo-app/src/users-protected/).

You will need to initialize 

```ts
import { PvaultWp } from '@typeorm-pvault';

export class UsersService {
    private readonly PvaultService: PvaultWp<ProtectedUser>;

    constructor(
    @InjectRepository(ProtectedUser)
    private userRepository: MongoRepository<ProtectedUser>,
    ) {
    this.PvaultService = new PvaultWp("COLLECTION");
```
### Annotate
Annotate the properties of the entity to be protected by Vault.

```ts
    @Column(<ExtendedColumnOptions>{
    parent: EntityClassName, // This field is only necessary on nested Entities.
    tokenize: true,
})
```

Note: `ExtendedColumnOptions` is exported by `typeorm-pvault`.

### Insert
Before inserting to the DB of the application, store the protected values in Vault.
Note that `insertAndPrepareEntity` is mutating, and `user`'s fields to be protected are now tokenized.

```ts
const { entity, vaultId } = await this.PvaultService.insertAndPrepareEntity(
    user,
);
```

If the entity has an auto-generated ID (e.g. using `@ObjectIdColumn` or `@PrimaryGeneratedColumn`), then it is necessary to update Vault with this ID so the Values can be queried later on.

```ts
await this.PvaultService.updateForeignId(
    userToReturn['_id'].toString(),
    vaultId,
);
```

### Get by ID
After integrating with Vault, the DB of the application stores the protected values of the relevant properties. Tou can use wrap the Repository instance to a Vault-aware Repository that will automatically detokenize the entity and return the original values.

```ts
this.PvaultService.safeRepository(this.userRepository).findOne(id);
```

### Query by protected property
After integrating with Vault, the DB of the application stores the protected values of the relevant properties. In order to query by a protected property, the input value should be tokenized first.

For example, if the "email" property is protected:
```ts
const tokenizedEmail = await this.PvaultService.tokenizeSingle(
    'email',
    email.toLowerCase(),
);

return this.PvaultService.safeRepository(this.userRepository).findOne({
    where: {
        contact: { email: tokenizedEmail },
    },
} as FindOneOptions);
```

### Update by ID
Before updating an object on the application's DB, the protected values should be updated as well:

```ts
const user = this.userRepository.create(input);

await this.PvaultService.updateAndPrepareEntity(id, user);
```

### Delete by ID
After deleting an object from the application's DB, the protected values should be removed from Vault as well:

```ts
await this.PvaultService.removeForeignId(id);
```
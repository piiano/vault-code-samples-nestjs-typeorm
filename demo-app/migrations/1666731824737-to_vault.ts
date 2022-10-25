import { getMongoManager, MigrationInterface } from 'typeorm';
import { PvaultWp } from '@typeorm-pvault';
import { ProtectedUser } from 'src/users-protected/entities/user.entity';
import { User } from 'src/users/entities/user.entity';

//////////////////////////////////////////////////////////////////////////////
// This migration file is migrating entities to use Piiano Vault using
// the @typeorm-pvault library. It is written mainly for representation
// purposes and can be greatly optimized.
//
// Also, in this code sample we have two modules - Users and ProtectedUsers,
// so the migration is moving from one to the other. In real-life migration,
// both will be the same.
//////////////////////////////////////////////////////////////////////////////

// Start a new Pvault service that interacts with the "users" collection.
const PvaultService = new PvaultWp('users');

export class toVault1666731824737 implements MigrationInterface {
  public async up(): Promise<any> {
    const mongoManager = getMongoManager();

    // Get all the currently stores users.
    const users = await mongoManager.find(User);

    for (const user of users) {
      // Foreach user, protect its annotated columns and update the entity instance.
      const { entity } = await PvaultService.insertAndPrepareEntity(user);

      // Update the application repository with the protected entity.
      await mongoManager.updateOne(
        ProtectedUser, // Note: As described above, in real-life migration this is "User", the same original class.
        { _id: user.id },
        {
          $set: {
            ...entity,
          },
        },
        {
          upsert: true, // Note: Only necessary for this demo.
        },
      );
    }
  }

  public async down(): Promise<void> {
    // TODO: implement.
    return;
  }
}

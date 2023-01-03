import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteWriteOpResultObject,
  FindOneOptions,
  MongoRepository,
} from 'typeorm';
import { UserCreateInput } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProtectedUser } from './entities/user.entity';
import { plainToClass } from 'class-transformer';
import { ObjectID } from 'mongodb';
import { PvaultWp } from '@typeorm-pvault';

const COLLECTION = 'users';

@Injectable()
export class UsersService {
  private readonly PvaultService: PvaultWp<ProtectedUser>;

  constructor(
    @InjectRepository(ProtectedUser)
    private userRepository: MongoRepository<ProtectedUser>,
  ) {
    this.PvaultService = new PvaultWp(COLLECTION);
  }

  async create(inp: UserCreateInput): Promise<ProtectedUser> {
    const user = this.userRepository.create(
      plainToClass(ProtectedUser, {
        country: inp.country,
        contact: {
          email: inp.contact.email,
        },
      }),
    );

    // Insert to Vault.
    // Note that `insertAndPrepareEntity` is mutating, and `user`'s fields to be protected
    // are now tokenized.
    const { entity, vaultId } = await this.PvaultService.insertAndPrepareEntity(
      user,
    );

    // Insert to DB.
    const result = await this.userRepository.insertOne(entity);

    if (result.insertedCount !== 1) {
      throw Error('Failed database insert');
    }

    const userToReturn = plainToClass(
      ProtectedUser,
      result.ops.pop() as ProtectedUser,
    );

    // If ID is auto-generated, update Vault with new ID.
    await this.PvaultService.updateForeignId(
      userToReturn['id'].toString(),
      vaultId,
    );

    return userToReturn;
  }

  async listAll(): Promise<ProtectedUser[]> {
    // Use `safeRepository` wrapper to get a Piiano Vault-aware Repository<T>. This repository
    // will automatically detokenize the entity and return the original values.
    return this.PvaultService.safeRepository(this.userRepository).find();
  }

  async findById(id: string): Promise<ProtectedUser | undefined> {
    // Use `safeRepository` wrapper to get a Piiano Vault-aware Repository<T>. This repository
    // will automatically detokenize the entity and return the original values.
    return this.PvaultService.safeRepository(this.userRepository).findOne(id);
  }

  async findByEmail(email: string): Promise<ProtectedUser | undefined> {
    // The "email" field is protected, so the DB (Mongo) has its values as tokens only.
    // Tokenize the input email and use the token to search the DB by email.
    const tokenizedEmail = await this.PvaultService.tokenizeSingle(
      'email',
      email.toLowerCase(),
    );

    return this.PvaultService.safeRepository(this.userRepository).findOne({
      where: {
        contact: { email: tokenizedEmail },
      },
    } as FindOneOptions);
  }

  async updateById(id: string, inp: UpdateUserDto): Promise<ObjectID> {
    const user = this.userRepository.create({
      ...inp,
    });

    // Update current Vault object with new values.
    await this.PvaultService.updateAndPrepareEntity(id, user);

    const result = await this.userRepository.updateOne(
      { id: new ObjectID(id) },
      {
        $set: {
          ...user,
        },
      },
    );

    if (result.modifiedCount === 1) {
      return id;
    }

    throw Error('Failed database update');
  }

  async deleteById(id: string): Promise<boolean> {
    const result = await this.userRepository
      .deleteOne({ id: new ObjectID(id) })
      .then((result: DeleteWriteOpResultObject) => result.deletedCount === 1);

    // Remove from Vault.
    await this.PvaultService.removeForeignId(id);

    return result;
  }
}

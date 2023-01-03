import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteWriteOpResultObject,
  FindOneOptions,
  MongoRepository,
} from 'typeorm';
import { UserCreateInput } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { plainToClass } from 'class-transformer';
import { ObjectID } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
  ) {}

  async create(inp: UserCreateInput): Promise<User> {
    const user = this.userRepository.create({
      country: inp.country,
      contact: {
        email: inp.contact.email,
      },
    });

    const result = await this.userRepository.insertOne(user);

    if (result.insertedCount === 1) {
      return plainToClass(User, result.ops.pop() as User);
    }

    throw Error('Failed database insert');
  }

  async listAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    } as FindOneOptions);
  }

  async updateById(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<ObjectID> {
    const result = await this.userRepository.updateOne(
      { id: new ObjectID(id) },
      {
        $set: {
          updateUserDto,
        },
      },
    );

    if (result.modifiedCount === 1) {
      return result.upsertedId.id;
    }

    throw Error('Failed database update');
  }

  async deleteById(id: string): Promise<boolean> {
    return this.userRepository
      .deleteOne({ id: new ObjectID(id) })
      .then((result: DeleteWriteOpResultObject) => result.deletedCount === 1);
  }
}

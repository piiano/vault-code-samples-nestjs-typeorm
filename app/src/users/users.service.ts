import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateInput } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PvaultRepository, PvaultWrapper } from './pvault.repository';

@Injectable()
export class UsersService {
  private readonly tokenizedUserRepository: PvaultRepository<User>;

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    this.tokenizedUserRepository = PvaultWrapper(userRepository);
  }

  create(inp: UserCreateInput): Promise<User> {
    const user = this.tokenizedUserRepository.create({
      email: inp.email,
      country: inp.country,
    });

    return this.tokenizedUserRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.tokenizedUserRepository.find();
  }

  findOne(id: string) {
    return this.tokenizedUserRepository.findOneOrFail(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const found = await this.tokenizedUserRepository.findOne(id);

    return this.tokenizedUserRepository.remove(found);
  }
}

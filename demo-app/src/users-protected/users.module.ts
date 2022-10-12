import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { ProtectedUser } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([ProtectedUser]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersProtectedModule {}

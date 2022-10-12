import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersProtectedModule } from './users-protected/users.module';

@Module({
  imports: [UsersModule, UsersProtectedModule],
})
export class AppModule {}

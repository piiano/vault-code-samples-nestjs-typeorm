import { PartialType } from '@nestjs/mapped-types';
import { UserCreateInput } from './create-user.dto';

export class UpdateUserDto extends PartialType(UserCreateInput) {}

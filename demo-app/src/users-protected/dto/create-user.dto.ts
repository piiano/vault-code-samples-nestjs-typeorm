import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsEmail, IsInstance, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

class ContactInput {
  @ApiProperty({ type: String })
  @Expose()
  @IsNotEmpty()
  @IsDefined()
  readonly firstName: string;

  @ApiProperty({ type: String })
  @Expose()
  @IsNotEmpty()
  @IsDefined()
  readonly lastName: string;

  @ApiProperty({ type: String })
  @Expose()
  @IsEmail()
  @IsDefined()
  readonly email: string;
}

Exclude();
export class UserCreateInput {
  @ApiProperty({ type: String })
  @Expose()
  @IsNotEmpty()
  @IsDefined()
  readonly username: string;

  @ApiProperty({ type: String })
  @Expose()
  @IsNotEmpty()
  @IsDefined()
  readonly password: string;

  @ApiProperty({ type: String })
  @Expose()
  @IsDefined()
  readonly country: string;

  @ApiProperty({ type: ContactInput })
  @IsInstance(ContactInput)
  readonly contact: ContactInput;
}

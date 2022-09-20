import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

Exclude();
export class UserCreateInput {
  @ApiProperty({ type: String })
  @Expose()
  @IsEmail()
  @IsDefined()
  readonly email: string;

  @ApiProperty({ type: String })
  @Expose()
  @IsDefined()
  readonly country: string;

  @ApiProperty({ type: String })
  @Expose()
  @IsNotEmpty()
  @IsDefined()
  readonly password: string;

  @ApiProperty({ type: String })
  @Expose()
  @IsOptional()
  readonly passwordHashType: string;
}

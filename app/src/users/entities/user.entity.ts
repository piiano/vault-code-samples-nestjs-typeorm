import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, plainToClass, Type } from 'class-transformer';
import { IsDefined, IsEmail, IsString, IsUUID } from 'class-validator';
import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('User')
export class User {
  @ApiProperty({ type: String })
  @ObjectIdColumn()
  readonly id: ObjectID;

  @ApiProperty({ type: String })
  @Column()
  @IsDefined()
  @IsString()
  readonly username: string;

  @ApiProperty({ type: String })
  @Column()
  @IsDefined()
  @IsString()
  readonly password: string;

  @ApiProperty({ type: String })
  @Column()
  @IsDefined()
  @IsString()
  readonly firstName: string;

  @ApiProperty({ type: String })
  @Column()
  @IsDefined()
  @IsString()
  readonly lastName: string;

  @ApiProperty({ type: String })
  @Column()
  @IsDefined()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ type: String })
  @Column()
  @IsDefined()
  @IsString()
  readonly country: string;
}

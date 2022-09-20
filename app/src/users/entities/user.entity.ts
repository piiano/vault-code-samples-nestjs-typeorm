import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, plainToClass, Type } from 'class-transformer';
import { IsDefined, IsEmail, IsUUID } from 'class-validator';
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
  @IsEmail()
  readonly email: string;

  @ApiProperty({ type: String })
  @Column()
  @IsDefined()
  readonly country: string;
}

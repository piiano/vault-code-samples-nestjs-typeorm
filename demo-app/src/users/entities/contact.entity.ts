import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString, IsEmail } from 'class-validator';
import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('Contact')
export class Contact {
  @ApiProperty({ type: String })
  @ObjectIdColumn()
  readonly id: ObjectID;

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
}

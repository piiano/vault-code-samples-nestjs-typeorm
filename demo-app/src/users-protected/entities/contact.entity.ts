import { ApiProperty } from '@nestjs/swagger';
import { ExtendedColumnOptions } from '@typeorm-pvault';
import { IsDefined, IsString, IsEmail } from 'class-validator';
import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('ProtectedContact')
export class ProtectedContact {
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
  @Column(<ExtendedColumnOptions>{
    parent: ProtectedContact, // This field is only necessary on nested Entities.
    tokenize: true,
  })
  @IsDefined()
  @IsEmail()
  readonly email: string;
}

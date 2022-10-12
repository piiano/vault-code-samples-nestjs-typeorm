import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsInstance, IsString } from 'class-validator';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ProtectedContact } from './contact.entity';

@Entity('ProtectedUser')
export class ProtectedUser {
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
  readonly country: string;

  @ApiProperty({ type: String })
  @Column()
  @IsInstance(ProtectedContact)
  @Type(() => ProtectedContact)
  readonly contact: ProtectedContact;
}

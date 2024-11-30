/* eslint-disable prettier/prettier */
import { IUser } from '../users/interface/IUser';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
}

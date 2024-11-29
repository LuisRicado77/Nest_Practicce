import { IUser } from "src/interfaces/IUser";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

 
}
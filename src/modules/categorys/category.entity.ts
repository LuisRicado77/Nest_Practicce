/* eslint-disable prettier/prettier */
import { ICategory } from "./interface/ICategory";

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string

}

/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IComment } from './interface/IComment';

@Entity()
export class Comment implements IComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
;
}

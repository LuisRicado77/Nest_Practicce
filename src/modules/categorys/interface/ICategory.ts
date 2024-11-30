/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable prettier/prettier */
export interface ICategory {
  id: number;
  name: string;
  description: string;
}

export interface ICategoryCreate extends Omit<ICategory, 'id'> {}

export interface ICategoryUpdate extends Partial<ICategoryCreate> {}

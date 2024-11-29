/* eslint-disable @typescript-eslint/no-empty-object-type */


export interface ICategory {
    id: string
    name:string;
    description:string
}

export interface ICategoryCreate extends Omit<ICategory, "id">{}

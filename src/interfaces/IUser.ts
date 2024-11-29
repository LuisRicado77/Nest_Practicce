/* eslint-disable @typescript-eslint/no-empty-object-type */


export interface IUser{
    id:number
    name:string
    lastName:string
    age:number
}

export interface IUserCreate extends Omit<IUser, 'id'>{}
export interface IUserUpdate extends Partial<IUserCreate>{}
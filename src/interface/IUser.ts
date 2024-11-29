export interface IUser {
    

    id: String;
    name: string;
    email: string;

}

export interface IUserCreate extends Omit<IUser,'id'>{}

export interface IUserUpdate extends Partial<IUserCreate>{}

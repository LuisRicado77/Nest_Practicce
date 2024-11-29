export interface ICategory {
    
 
    id: number;
    name: string;
    description: string;

}

export interface  ICategoryCreate extends Omit<ICategory,'id'>{}

export interface ICategoryUpdate extends Partial<ICategoryCreate>{}
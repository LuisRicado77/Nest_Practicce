import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ICategory } from "src/interface/ICategory";
import { IEventCreate } from "src/interface/IEvent";

export class Category implements ICategory {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;

     

}
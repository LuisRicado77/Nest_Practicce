import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ICategory } from "../interface/ICategory";
import { ICategoryCreate } from "../interface/ICategory"; 
import { IEventCreate } from "../../events/interface/IEvent"; 

export class CategoryDto implements ICategoryCreate{
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
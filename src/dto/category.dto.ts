import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ICategory, ICategoryCreate } from "src/interface/ICategory";
import { IEventCreate } from "src/interface/IEvent";

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
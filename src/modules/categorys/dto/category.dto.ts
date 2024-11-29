import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ICategory, ICategoryCreate } from "src/modules/categorys/interface/ICategory";
import { IEventCreate } from "src/modules/events/interface/IEvent";

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
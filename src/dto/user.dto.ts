import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    email: string;
     

}
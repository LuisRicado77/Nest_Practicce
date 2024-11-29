import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EventDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    content: string;
    
    @IsNumber()
    user_id: string;

    @IsNumber()
    event_id: string;

   

}
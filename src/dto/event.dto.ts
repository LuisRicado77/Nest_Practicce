import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EventDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    date: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsNumber()
    organizer_id: string;
     

}
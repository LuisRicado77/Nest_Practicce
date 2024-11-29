import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IEventCreate } from "src/modules/events/interface/IEvent";

export class EventDto implements IEventCreate {
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
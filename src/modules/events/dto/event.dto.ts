import { IsNotEmpty, IsNumber, IsString } from '';
import { IEventCreate } from '../interface/IEvent';

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

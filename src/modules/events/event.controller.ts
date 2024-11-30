/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './dto/event.dto';
import { UpdateEventDto } from './dto/event-update.dto';
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('/:id')
  getEventById(@Param('id', ParseIntPipe) id: number) {
    return this.eventService.getEvent(id);
  }

  @Get()
  getEvents() {
    return this.eventService.getEvents();
  }

  @Post()
  postEvent(@Body() data: EventDto) {
    console.log(data);
    this.eventService.createEvent(data);
    return 'Saved with success';
  }

  @Patch('/:id')
  updateEvent(@Param('id') id: number, @Body() updateEvent: UpdateEventDto) {
    return this.eventService.updateEvent((id), updateEvent);
  }

  @Delete('/:id')
  deleteEvent(@Param('id') id: number) {
    return this.eventService.deleteEvent((id));
  }
}

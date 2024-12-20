/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { IEvent, IEventCreate, IEventUpdate } from './interface/IEvent';
import { v4 } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  

  constructor(
    @InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

  async getEvents() {
    let events: IEvent[] | undefined;
    try {
      events = await this.eventRepository.find();
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get Events',
      });
    }

    if (!events) {
      throw new NotFoundException('Not found', {
        description: 'Users not found',
      });
    }
    return events;
  }

  async getEvent(id: number) {
    let event: IEvent | undefined;
    try {
      event = await this.eventRepository.findOne({
        where: { id },
        relations: ['tasks'],
      });
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get user',
      });
    }
    if (!event) {
      throw new NotFoundException('Not found', {
        description: 'User not found',
      });
    }
    return event;
  }

  async createEvent(event: IEventCreate) {
    try {
      const newEvent = this.eventRepository.create(event);
      await this.eventRepository.save(newEvent);
    } catch (error) {
      throw new RequestTimeoutException('Error at saving the database', {
        description: 'Error trying to save user',
      });
    }
  }

  async updateEvent(id: number, eventUpdate: IEventUpdate) {
    let event: IEvent | undefined;
    try {
      event = await this.eventRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get user',
      });
    }
    if (!event) {
      throw new NotFoundException('User not found', {
        description: 'User does not exists in my app',
      });
    }

    event.date = eventUpdate?.date ?? event.date;
    event.description = eventUpdate?.description ?? event.description;
    event.location = eventUpdate?.location ?? event.location;
    event.title = eventUpdate?.title ?? event.title;
   

    try {
      await this.eventRepository.save(event);
    } catch (error) {
      throw new UnprocessableEntityException('Unprocessable error', {
        description: 'Error at updating user',
      });
    }
    return true;
  }

  async deleteEvent(id: number) {
    try {
      const event = await this.eventRepository.findOneBy({ id });
      if (!event) {
        throw new Error('No found it');
      }
      this.eventRepository.delete(event);
      return true;
    } catch (error) {
      throw new Error('No eliminated');
    }
  }
}

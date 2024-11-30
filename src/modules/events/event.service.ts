import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { IEvent, IEventCreate, IEventUpdate } from './interface/IEvent';
import { v4 } from 'uuid';

@Injectable()
export class EventService {
  private events: IEvent[] = [];

  constructor() {}

  async getEvents() {
    let events: IEvent[] | undefined;
    try {
      events = await this.eventRepository.find();
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get users',
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

  async updateEvent(id: String, eventUpdate: IEventUpdate) {
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
    event.organizer_id = eventUpdate?.organizer_id ?? event.organizer_id;

    try {
      await this.eventRepository.save(event);
    } catch (error) {
      throw new UnprocessableEntityException('Unprocessable error', {
        description: 'Error at updating user',
      });
    }
    return true;
  }

  async deleteEvent(id: string) {
    this.events = this.events.filter((event) => {
      if (event.id != Number(id)) return event;
    });
    return true;
  }
}

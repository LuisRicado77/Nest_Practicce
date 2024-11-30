/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface IEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

export interface IEventCreate extends Omit<IEvent, "id"> {}

export interface IEventUpdate extends Partial<IEventCreate> {}

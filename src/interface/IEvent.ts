export interface IEvent {
    
    id: number;
    title: string;
    description: string;  
    date: string;  
    location: string;
    organizer_id: string;

}

export interface IEventCreate extends Omit<IEvent,'id,organizer_id'>{}

export interface IEventUpdate extends Partial<IEventCreate>{}
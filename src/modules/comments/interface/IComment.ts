export interface IComment {
    
  
    id: number;
    content: string;
    user_id: string;
    event_id: string;

}

export interface  ICommentCreate extends Omit<IComment,'id'>{}

export interface ICommentUpdate extends Partial<ICommentCreate>{}
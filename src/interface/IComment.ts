export interface IComment {
    
  
    id: number;
    content: string;
    user_id: string;
    event_id: string;

}

export interface  ICommentCreate extends Omit<IComment,'id,user_id,event_id'>{}
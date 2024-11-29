import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, IUserCreate, IUserUpdate } from './modules/users/interface/IUser';
import { IEvent, IEventCreate, IEventUpdate } from './modules/events/interface/IEvent';
import { IComment, ICommentCreate, ICommentUpdate } from './modules/comments/interface/IComment';
import { ICategory, ICategoryCreate, ICategoryUpdate } from './modules/categorys/interface/ICategory';


@Injectable()
export class AppService {
  private users: IUser[]=[];
  private events: IEvent[]=[];
  private comments: IComment[]=[];
  private categorys: ICategory[]=[];
  
  
 


 

}

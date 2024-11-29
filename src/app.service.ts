import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, IUserCreate, IUserUpdate } from './interface/IUser';
import { IEvent, IEventCreate } from './interface/IEvent';
import { IComment, ICommentCreate } from './interface/IComment';
import { ICategory, ICategoryCreate } from './interface/ICategory';
import { v4 } from 'uuid';

@Injectable()
export class AppService {
  private users: IUser[]=[];
  private event: IEvent[]=[];
  private comment: IComment[]=[];
  private category: ICategory[]=[];
  
  
  getUsers() {
    return this.users;
  }
  getEvent() {
    return this.event;
  }
  getComment() {
    return this.comment;
  }
  getCategory() {
    return this.category;
  }


  createUser(user: IUserCreate){
    const newUser ={...user, id:v4()};
    this.users.push(newUser);
  }

  createEvent(event: IEventCreate){
    const newEvent ={...event, id:Number(v4())};
    this.event.push(newEvent);
  }
  createComment(comment: ICommentCreate){
    const newComment ={...comment, id:Number(v4())};
    this.comment.push(newComment);
  }

  createCategory(category: ICategoryCreate){
    const newCategory ={...category, id:Number(v4())};
    this.category.push(newCategory);
  }

  updateUser(id:String, userUpdate:IUserUpdate){
    let user: IUser | undefined = this.users.find((value: IUser)=>value.id === id);
    if(!user){
      throw new NotFoundException();
    }

  }

}
/*40:10*/
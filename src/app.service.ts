import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, IUserCreate, IUserUpdate } from './modules/users/interface/IUser';
import { IEvent, IEventCreate, IEventUpdate } from './modules/events/interface/IEvent';
import { IComment, ICommentCreate, ICommentUpdate } from './modules/comments/interface/IComment';
import { ICategory, ICategoryCreate, ICategoryUpdate } from './modules/categorys/interface/ICategory';
import { v4 } from 'uuid';

@Injectable()
export class AppService {
  private users: IUser[]=[];
  private events: IEvent[]=[];
  private comments: IComment[]=[];
  private categorys: ICategory[]=[];
  
  
  getUsers() {
    return this.users;
  }
  getEvent() {
    return this.events;
  }
  getComment() {
    return this.comments;
  }
  getCategory() {
    return this.categorys;
  }


  createUser(user: IUserCreate){
    const newUser ={...user, id:v4()};
    this.users.push(newUser);
  }

  createEvent(event: IEventCreate){
    const newEvent ={...event, id:Number(v4())};
    this.events.push(newEvent);
  }
  createComment(comment: ICommentCreate){
    const newComment ={...comment, id:Number(v4())};
    this.comments.push(newComment);
  }

  createCategory(category: ICategoryCreate){
    const newCategory ={...category, id:Number(v4())};
    this.categorys.push(newCategory);
  }

  updateUser(id:String, userUpdate:IUserUpdate){
    let user: IUser | undefined = this.users.find((value: IUser)=>value.id === id);
    if(!user){
      throw new NotFoundException();
    }

    user.email= userUpdate?.email ?? user.email;
    user.name= userUpdate?.name ?? user.name;

    this.users =this.users.map((u)=>{
      if (u.id === id) {
        return user;
      }
      return u;
    })
    return true;
  }

  updateEvent(id:String, eventUpdate:IEventUpdate){
    let event: IEvent | undefined = this.events.find((value: IEvent)=>value.id === Number(id));
    if(!event){
      throw new NotFoundException();
    }

    event.date= eventUpdate?.date ?? event.date;
    event.description= eventUpdate?.description ?? event.description;
    event.location= eventUpdate?.location ?? event.location;
    event.title= eventUpdate?.title ?? event.title;
    event.organizer_id= eventUpdate?.organizer_id ?? event.organizer_id;
    

    this.events =this.events.map((u)=>{
      if (u.id === Number(id)) {
        return event;
      }
      return u;
    })
    return true;
  }

  updateComment(id:String, commentUpdate:ICommentUpdate){
    let comment: IComment | undefined = this.comments.find((value: IComment)=>value.id === Number(id));
    if(!comment){
      throw new NotFoundException();
    }

    comment.content= commentUpdate?.content ?? comment.content;
    comment.event_id= commentUpdate?.event_id ?? comment.event_id;
    comment.user_id= commentUpdate?.user_id ?? comment.user_id;
   

    this.comments =this.comments.map((u)=>{
      if (u.id === Number(id)) {
        return comment;
      }
      return u;
    })
    return true;
  }

  updateCategory(id:String, categoryUpdate:ICategoryUpdate){
    let category: ICategory | undefined = this.categorys.find((value: ICategory)=>value.id === Number(id));
    if(!category){
      throw new NotFoundException();
    }

    category.description= categoryUpdate?.description ?? category.description;
    category.name= categoryUpdate?.name ?? category.name;
   

    this.categorys =this.categorys.map((u)=>{
      if (u.id === Number(id)) {
        return category;
      }
      return u;
    })
    return true;
  }

  deleteUser(id:string){
    this.users = this.users.filter((user)=>{
      if(user.id != id)
        return user;
    });
    return true
  }

}
/*40:10*/
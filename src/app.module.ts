import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { UserController } from './modules/users/user.controller';
import { UserService } from './modules/users/user.service';
import { EventModule } from './modules/events/event.module';
import { CommentModule } from './modules/comments/comment.module';
import { CommentService } from './modules/comments/comment.service';
import { CategoryModule } from './modules/categorys/category.module';


@Module({
  imports: [UserModule, EventModule, CommentModule, CategoryModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, CommentService],
})
export class AppModule {}

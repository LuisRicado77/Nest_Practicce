/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { IComment, ICommentCreate, ICommentUpdate } from './interface/IComment';
import { v4 } from 'uuid';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  private comments: IComment[] = [];

  constructor(private readonly commentRepository: Repository<Comment>) {}

  async getComments() {
    let comments: IComment[] | undefined;
    try {
      comments = await this.commentRepository.find();
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get users',
      });
    }

    if (!comments) {
      throw new NotFoundException('Not found', {
        description: 'Users not found',
      });
    }
    return comments;
  }

  async getComment(id: number) {
    let comment: IComment | undefined;
    try {
      comment = await this.commentRepository.findOne({
        where: { id },
        relations: ['tasks'],
      });
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get user',
      });
    }
    if (!comment) {
      throw new NotFoundException('Not found', {
        description: 'User not found',
      });
    }
    return comment;
  }

  async createComment(comment: ICommentCreate) {
    try {
      const newUser = this.commentRepository.create(comment);
      await this.commentRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException('Error at saving the database', {
        description: 'Error trying to save user',
      });
    }
  }

  async updateComment(id: number, commentUpdate: ICommentUpdate) {
    let comment: IComment | undefined;
    try {
      comment = await this.commentRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get user',
      });
    }
    if (!comment) {
      throw new NotFoundException('User not found', {
        description: 'User does not exists in my app',
      });
    }

    comment.content = commentUpdate?.content ?? comment.content;
   ;

    try {
      await this.commentRepository.save(comment);
    } catch (error) {
      throw new UnprocessableEntityException('Unprocessable error', {
        description: 'Error at updating user',
      });
    }
    return true;
  }

  async deleteComment(id: number) {
    this.comments = this.comments.filter((comment) => {
      if (comment.id != Number(id)) return comment;
    });
    return true;
  }
}

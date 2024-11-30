/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { UpdateCommentDto } from './dto/comment-update.dto';
@Controller('comment')
export class EventController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/:id')
  getCommentById(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.getComment(id);
  }

  @Get()
  getComments() {
    return this.commentService.getComments();
  }

  @Post()
  postComment(@Body() data: CommentDto) {
    console.log(data);
    this.commentService.createComment(data);
    return 'Saved with success';
  }

  @Patch('/:id')
  updateComment(
    @Param('id') id: number,
    @Body() updateComment: UpdateCommentDto,
  ) {
    return this.commentService.updateComment(String(id), updateComment);
  }

  @Delete('/:id')
  deleteComments(@Param('id') id: number) {
    return this.commentService.deleteComment(String(id));
  }
}

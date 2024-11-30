import { PartialType } from '@nestjs/mapped-types';
import { CommentDto } from './comment.dto';

export class UpdateCommentDto extends PartialType(CommentDto) {}

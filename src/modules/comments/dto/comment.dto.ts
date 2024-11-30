import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ICommentCreate } from "../interface/IComment";

export class CommentDto implements ICommentCreate {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  content: string;
}

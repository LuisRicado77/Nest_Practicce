import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IComment, ICommentCreate } from "src/interface/IComment";

export class CommentDto  implements ICommentCreate{
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    content: string;
    
    @IsNumber()
    user_id: string;

    @IsNumber()
    event_id: string;

   

}
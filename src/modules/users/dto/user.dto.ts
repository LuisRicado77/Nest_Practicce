import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { IUserCreate } from "src/modules/users/interface/IUser";

export class UserDto implements IUserCreate {
  @IsEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}

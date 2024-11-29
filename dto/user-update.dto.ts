import { PartialType } from "@nestjs/mapped-types";
import { userDto } from "./user.dto";

export class UserUpdateDto extends PartialType(userDto){}
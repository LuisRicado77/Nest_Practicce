/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import {  IUserCreate } from "src/interfaces/IUser";

export class userDto implements IUserCreate{
   
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    lastName:string


    @IsNumber()
    @IsNotEmpty()
    age:number;
}
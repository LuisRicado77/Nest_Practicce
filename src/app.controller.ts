import { Controller, Get, Post,Body, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/user-update.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser() {
    return this.appService.getUsers();
  }

  @Post()
  postH(@Body() data:UserDto){
    console.log(data);
    this.appService.createUser(data);
    return 'SAVED WITH SUCCESS ';

  }

  @Patch()
  updateUser(@Body() updateUser: UpdateUserDto){}
}

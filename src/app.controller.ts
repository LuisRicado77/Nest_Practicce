import { Controller, Get, Post,Body, Patch, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './modules/users/dto/user.dto';
import { UpdateUserDto } from './modules/users/dto/user-update.dto';

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

  @Patch('/:id')
  updateUser(@Param('id')id: string, @Body() updateUser: UpdateUserDto){
    return this.appService.updateUser(id, updateUser);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id);
  }
}

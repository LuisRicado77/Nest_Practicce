import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postH(@Body() data:UserDto){


  }
}

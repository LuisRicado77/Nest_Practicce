/* eslint-disable prettier/prettier */
import { Body, Controller, Get ,Post} from '@nestjs/common';
import { AppService } from './app.service';
import { userDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Body() data:userDto){
    console.log(data)
    return "hello from post"
  }
}

import { Module } from "@nestjs/common";
import { EventController } from "./event.controller";
import { EventService } from "./event.service";
import { TypeOrmModule } from "@nestjs/typeorm";
/*import { TypeOrmModule } from '@nestjs/typeorm';*/
/*import { User } from './user.entity';*/
import { Event } from "./event.entity";
@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}

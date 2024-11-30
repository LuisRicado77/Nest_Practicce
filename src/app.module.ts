/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './modules/events/event.module';
import { CommentModule } from './modules/comments/comment.module';
import { CategoryModule } from './modules/categorys/category.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        console.log('DATABASE_TYPE:', config.get<string>('DATABASE_TYPE'));
        console.log('DATABASE_HOST:', config.get<string>('DATABASE_HOST'));
        console.log('DATABASE_PORT:', config.get<number>('DATABASE_PORT'));
        console.log('DATABASE_USER:', config.get<string>('DATABASE_USER'));
        console.log(
          'DATABASE_PASSWORD:',
          config.get<string>('DATABASE_PASSWORD'),
        );
        console.log('DATABASE_NAME:', config.get<string>('DATABASE_NAME'));

        return {
          database: config.get<string>('DATABASE_NAME'),
          username: config.get<string>('DATABASE_USER'),
          password: config.get<string>('DATABASE_PASSWORD'),
          port: config.get<number>('DATABASE_PORT'),
          host: config.get<string>('DATABASE_HOST'),
          type: config.get<'mysql'>('DATABASE_TYPE'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    UserModule,
    EventModule,
    CommentModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';

import { AppService } from './app.service';
import { AppController } from './src/app.controller';

describe('AppController', () => {

  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });


  describe('root', () => {
    it('should return "Hello World!"', () => {
      // ASSERT
      const users = appController.getUser();
      expect(users).toBeDefined();
    });
  });
});
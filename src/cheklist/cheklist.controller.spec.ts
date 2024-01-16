import { Test, TestingModule } from '@nestjs/testing';
import { CheklistController } from './cheklist.controller';

describe('CheklistController', () => {
  let controller: CheklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheklistController],
    }).compile();

    controller = module.get<CheklistController>(CheklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

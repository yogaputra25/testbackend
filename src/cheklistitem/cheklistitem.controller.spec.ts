import { Test, TestingModule } from '@nestjs/testing';
import { CheklistitemController } from './cheklistitem.controller';

describe('CheklistitemController', () => {
  let controller: CheklistitemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheklistitemController],
    }).compile();

    controller = module.get<CheklistitemController>(CheklistitemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

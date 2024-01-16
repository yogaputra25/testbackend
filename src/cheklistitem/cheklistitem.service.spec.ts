import { Test, TestingModule } from '@nestjs/testing';
import { CheklistitemService } from './cheklistitem.service';

describe('CheklistitemService', () => {
  let service: CheklistitemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheklistitemService],
    }).compile();

    service = module.get<CheklistitemService>(CheklistitemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

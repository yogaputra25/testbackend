import { Test, TestingModule } from '@nestjs/testing';
import { CheklistService } from './cheklist.service';

describe('CheklistService', () => {
  let service: CheklistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheklistService],
    }).compile();

    service = module.get<CheklistService>(CheklistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

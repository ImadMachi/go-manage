import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseLinesService } from './purchase-lines.service';

describe('PurchaseLinesService', () => {
  let service: PurchaseLinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseLinesService],
    }).compile();

    service = module.get<PurchaseLinesService>(PurchaseLinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

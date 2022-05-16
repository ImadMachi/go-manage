import { Test, TestingModule } from '@nestjs/testing';
import { OrderLinesService } from './orderLines.service';
 
describe('OrderslineService', () => {
  let service: OrderLinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderLinesService],
    }).compile();

    service = module.get<OrderLinesService>(OrderLinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

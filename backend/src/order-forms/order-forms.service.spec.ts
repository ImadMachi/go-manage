import { Test, TestingModule } from '@nestjs/testing';
import { OrderFormsService } from './order-forms.service';

describe('OrderFormsService', () => {
  let service: OrderFormsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderFormsService],
    }).compile();

    service = module.get<OrderFormsService>(OrderFormsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

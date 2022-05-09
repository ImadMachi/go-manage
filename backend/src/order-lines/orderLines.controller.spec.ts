import { Test, TestingModule } from '@nestjs/testing';
import { OrderLinesController } from './orderLines.controller';

describe('OrdersLinesController', () => {
  let controller: OrderLinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderLinesController],
    }).compile();

    controller = module.get<OrderLinesController>(OrderLinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OrderFormsController } from './order-forms.controller';

describe('OrderFormsController', () => {
  let controller: OrderFormsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderFormsController],
    }).compile();

    controller = module.get<OrderFormsController>(OrderFormsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

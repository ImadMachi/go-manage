import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseLinesController } from './purchase-lines.controller';
import { PurchaseLinesService } from './purchase-lines.service';

describe('PurchaseLinesController', () => {
  let controller: PurchaseLinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseLinesController],
      providers: [PurchaseLinesService],
    }).compile();

    controller = module.get<PurchaseLinesController>(PurchaseLinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

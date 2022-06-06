import { Test, TestingModule } from '@nestjs/testing';
import { QuoteProductController } from './quote-product.controller';
import { QuoteProductService } from './quote-product.service';

describe('QuoteProductController', () => {
  let controller: QuoteProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteProductController],
      providers: [QuoteProductService],
    }).compile();

    controller = module.get<QuoteProductController>(QuoteProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

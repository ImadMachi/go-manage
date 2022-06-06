import { Controller, Get } from '@nestjs/common';
import { QuoteProductService } from './quote-product.service';

@Controller('quoteProducts')
export class QuoteProductController {
  constructor(private quoteProductService: QuoteProductService) {}
  @Get()
  findByOrder(orderId: number) {
    return this.quoteProductService.findByOrder(orderId);
  }
}

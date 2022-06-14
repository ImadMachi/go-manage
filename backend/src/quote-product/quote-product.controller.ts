import { Controller, Get } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { QuoteProductDto } from './dto/quote-product.dto';
import { QuoteProductService } from './quote-product.service';

@Serialize(QuoteProductDto)
@Controller('quoteProducts')
export class QuoteProductController {
  constructor(private quoteProductService: QuoteProductService) {}
}

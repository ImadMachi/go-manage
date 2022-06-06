import { PartialType } from '@nestjs/mapped-types';
import { CreateQuoteProductDto } from './create-quote-product.dto';

export class UpdateQuoteProductDto extends PartialType(CreateQuoteProductDto) {}

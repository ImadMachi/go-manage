import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerDto } from 'src/customer/dto/customer.dto';
import { QuoteProductDto } from 'src/quote-product/dto/quote-product.dto';

export class QuoteDto {
  @Expose()
  id: number;

  @Expose()
  creationDate: Date;

  @Expose()
  vat: number;

  @Type(() => CustomerDto)
  @ValidateNested()
  @Expose()
  customer: CustomerDto;

  @Type(() => QuoteProductDto)
  @ValidateNested()
  @Expose()
  quoteProducts: QuoteProductDto[];
}

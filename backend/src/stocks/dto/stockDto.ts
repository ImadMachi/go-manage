import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ProductDto } from 'src/products/dto/product.dto';

export class StockDto {
  @Expose()
  id: number;

  @Expose()
  qty: number;

  @Expose()
  creationDate: Date;

  @Type(() => ProductDto)
  @ValidateNested()
  @Expose()
  product: ProductDto;
}

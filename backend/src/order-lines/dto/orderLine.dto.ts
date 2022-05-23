import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ProductDto } from 'src/products/dto/product.dto';
export class OrderLineDto {
  @Expose()
  id: number;

  @Expose()
  qty: number;

  @Type(() => ProductDto)
  @ValidateNested()
  @Expose()
  product: ProductDto;
}

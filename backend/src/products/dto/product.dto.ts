import { Expose } from 'class-transformer';

export class ProductDto {
  @Expose()
  id: number;

  @Expose()
  price: number;

  @Expose()
  title: string;

  @Expose()
  image: string;

  @Expose()
  rating: number;

  @Expose()
  stock: number;

  @Expose()
  userId: number;

  
  @Expose()
  description:string;
}

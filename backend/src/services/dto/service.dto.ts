import { Expose } from 'class-transformer';

export class ServiceDto {
  @Expose()
  id: number;

  @Expose()
  price: number;

  @Expose()
  title: string;

  @Expose()
  imag: string;

  @Expose()
  rating: number;

  @Expose()
  promo: string;

 
}
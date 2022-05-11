import { Expose } from 'class-transformer';

export class ServiceDto {
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
  userId: number;

  
  @Expose()
  description:string;
}

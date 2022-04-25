import { Expose } from 'class-transformer';

export class PackDto {
  @Expose()
  id: number;

  @Expose()
  price: number;

  @Expose()
  description: string;

  @Expose()
  date: Date;
}

import { Expose } from 'class-transformer';
export class OrderDto {
  @Expose()
  id: number;

  @Expose()
  customersId: number;

  @Expose()
  date: number;

  @Expose()
  billingName: string;

  @Expose()
  total: number;

  @Expose()
  paymentStatus: string;

  @Expose()
  paymentMethod: string;
}

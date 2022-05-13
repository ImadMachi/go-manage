import { Expose } from 'class-transformer';
export class OrderDto {
  @Expose()
  id: number;

  @Expose()
  id:number;

  @Expose()
  date:number;

  @Expose()
  billingName:string;

  @Expose()
  total:number;

  @Expose()
  paymentStatus:string;

  @Expose()
  paymentMethod:string;
 }
  billingName: string;

  @Expose()
  date: number;

  @Expose()
  paymentStatus: string;

  @Expose()
  paymentMethod: string;

  @Expose()
  total: number;

  @Expose()
  customerId: number;
}

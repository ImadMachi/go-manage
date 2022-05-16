import { Expose } from 'class-transformer';
export class OrderLineDto {
  @Expose()
  id: number;



  @Expose()
  qty:number;

  @Expose()
  productId: number;

  @Expose()
  orderId: number;


 }
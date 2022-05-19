import { Expose } from 'class-transformer';

export class OrderDto {
  @Expose()
  id: number;

  @Expose()
  creationDate: Date;

  @Expose()
  totalPrice: number;

  @Expose()
  paymentStatus: string;

  @Expose()
  paymentMethod: string;

  @Expose()
  paymentDate: Date;

  @Expose()
  isDelivered: boolean;

  @Expose()
  deliveringDate: Date;

  @Expose()
  vat: number;

  @Expose()
  customerId: number;

  @Expose()
  billId: number;
}

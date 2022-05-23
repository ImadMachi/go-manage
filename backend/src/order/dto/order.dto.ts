import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerDto } from 'src/customer/dto/customer.dto';
import { OrderLineDto } from 'src/order-lines/dto/orderLine.dto';
import { DeliveryStatus } from '../enums/deliveryStatus.enum';
import { PaymentMethod } from '../enums/paymentMethod.enum';
import { PaymentStatus } from '../enums/paymentStatus.enum';

export class OrderDto {
  @Expose()
  id: number;

  @Expose()
  creationDate: String;

  @Expose()
  paymentStatus: PaymentStatus[];

  @Expose()
  paymentMethod: PaymentMethod[];

  @Expose()
  paymentDate: String;

  @Expose()
  deliveryStatus: DeliveryStatus[];

  @Expose()
  deliveringDate: String;

  @Expose()
  vat: number;

  @Expose()
  customerId: number;

  @Expose()
  billId: number;

  @Expose()
  date: number;

  @Type(() => CustomerDto)
  @ValidateNested()
  @Expose()
  customer: CustomerDto;

  @Type(() => OrderLineDto)
  @ValidateNested()
  @Expose()
  orderLines: OrderLineDto[];
}

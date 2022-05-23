import { IsArray, IsDateString, IsNumber, IsString } from 'class-validator';
import { PaymentMethod } from '../enums/paymentMethod.enum';

export class CreateOrderDto {
  @IsDateString()
  creationDate: Date;

  @IsString()
  paymentMethod: PaymentMethod[];

  @IsNumber()
  vat: number;

  @IsNumber()
  customerId: number;

  @IsArray()
  products: Array<{ id; qty }>;
}

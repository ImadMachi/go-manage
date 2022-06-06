import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { DeliveryStatus } from '../enums/deliveryStatus.enum';
import { PaymentMethod } from '../enums/paymentMethod.enum';
import { PaymentStatus } from '../enums/paymentStatus.enum';

export class UpdateOrderDto {
  @IsOptional()
  @IsDateString()
  creationDate: Date;

  @IsOptional()
  @IsString()
  paymentStatus: PaymentStatus[];

  @IsOptional()
  @IsString()
  paymentMethod: PaymentMethod[];

  @IsOptional()
  @IsDateString()
  paymentDate: Date;

  @IsOptional()
  @IsString()
  deliveryStatus: DeliveryStatus[];

  @IsOptional()
  @IsDateString()
  deliveringDate: Date;

  @IsOptional()
  @IsNumber()
  vat: number;
}

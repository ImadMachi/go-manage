import { IsArray, IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsDateString()
  creationDate: Date;

  @IsNumber()
  totalPrice: number;

  @IsString()
  paymentStatus: string;

  @IsString()
  paymentMethod: string;

  @IsDateString()
  paymentDate: Date;

  @IsBoolean()
  isDelivered: boolean;

  @IsDateString()
  deliveringDate: Date;

  @IsNumber()
  vat: number;

  @IsNumber()
  customerId: number;

  @IsArray()
  products: { id; qty }[];
}

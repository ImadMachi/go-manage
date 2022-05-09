import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  billingName: string;

  @IsNumber()
  total: number;

  @IsString()
  paymentStatus: string;

  @IsString()
  paymentMethod: string;

  @IsNumber()
  customerId: number;

  @IsArray()
  products: { id; qty }[];
}

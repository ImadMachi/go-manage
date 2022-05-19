import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsDateString()
  creationDate: Date;

  @IsOptional()
  @IsNumber()
  totalPrice: number;

  @IsOptional()
  @IsString()
  paymentStatus: string;

  @IsOptional()
  @IsString()
  paymentMethod: string;

  @IsOptional()
  @IsDateString()
  paymentDate: Date;

  @IsOptional()
  @IsBoolean()
  isDelivered: boolean;

  @IsOptional()
  @IsDateString()
  deliveringDate: Date;

  @IsOptional()
  @IsNumber()
  vat: number;
}

import { IsArray, IsDateString, IsNumber } from 'class-validator';

export class CreateQuoteDto {
  @IsNumber()
  customerId: number;

  @IsDateString()
  creationDate: Date;

  @IsNumber()
  vat: number;

  @IsArray()
  products: Array<{ id; qty }>;
}

import { IsNumber, IsString } from 'class-validator';

export class CreateBillDto {
  @IsString()
  description: string;

  @IsNumber()
  qte: number;

  @IsNumber()
  unitPrice: number;

  @IsNumber()
  tva: number;

  @IsNumber()
  totalHt: number;

  @IsString()
  numBill: string;

  @IsNumber()
  totalTtc: number;
}

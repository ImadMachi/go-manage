import { IsNumber, IsString } from "class-validator";



export class CreateCurrencyDto {
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
  numCurrency: string;

  @IsNumber()
  totalTtc: number;

 
}

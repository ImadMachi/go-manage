import { IsNumber, IsOptional, IsString } from "class-validator";



export class UpdateBillDto {
    @IsOptional()
  @IsString()
 description: string;

 @IsOptional()
  @IsNumber()
  qte: string;

  @IsOptional()
  @IsNumber()
  unitPrice: string;

  @IsOptional()
  @IsNumber()
  tva: number;

  @IsOptional()
  @IsNumber()
  totalHt: number;



  @IsOptional()
  @IsNumber()
  totalTtc: number;

 
}

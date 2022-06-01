import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';


export class UpdatePurchaseDto {
  @IsOptional()
  @IsDateString()
  creationDate: Date;

  @IsOptional()
  @IsNumber()
  vat: number;
}


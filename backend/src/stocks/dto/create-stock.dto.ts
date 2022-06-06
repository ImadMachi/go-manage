import { IsDateString, IsNumber, IsString, Min } from 'class-validator';

export class CreateStockDto {
  @IsNumber()
  @Min(0)
  qty: number;

  @IsDateString()
  creationDate: Date;
}

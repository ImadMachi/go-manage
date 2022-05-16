import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateStockDto {
  @IsNumber()
  qty: number;

  @IsDate()
  @IsString()
  creationDate: Date;
}

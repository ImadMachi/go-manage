import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsNumber, IsOptional, Min } from 'class-validator';
import { CreateStockDto } from './create-stock.dto';

export class UpdateStockDto extends PartialType(CreateStockDto) {
  @IsOptional()
  @IsNumber()
  @Min(0)
  qty: number;

  @IsOptional()
  @IsDateString()
  creationDate: Date;
}

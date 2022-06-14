import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsNumber } from 'class-validator';
import { CreateQuoteDto } from './create-quote.dto';

export class UpdateQuoteDto extends PartialType(CreateQuoteDto) {
  @IsNumber()
  id: number;

  @IsDateString()
  creationDate: Date;

  @IsNumber()
  vat: number;
}

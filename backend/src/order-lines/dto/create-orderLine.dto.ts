import { IsNumber, IsString } from 'class-validator';

export class CreateOrderLineDto {
  @IsNumber()
  qty: number;
}

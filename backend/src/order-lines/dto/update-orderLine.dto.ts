import { IsNumber, IsString } from 'class-validator';

export class UpdateOrdeLineDto {
  @IsNumber()
  qty: number;
}

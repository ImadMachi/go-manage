import { IsNumber, IsString } from 'class-validator';

export class CreatePackDto {
  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  date: string;
}

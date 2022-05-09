import { IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsNumber()
  price: number;

  @IsString()
  title: string;

  @IsString()
  imag: string;

  @IsNumber()
  rating: number;

  @IsString()
  promo: string;

  @IsNumber()
  userId:number;
}

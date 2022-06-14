import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  price: number;

  @IsString()
  title: string;

  @IsNumber()
  rating: number;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  category: string;
}

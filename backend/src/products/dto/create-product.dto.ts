import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  price: number;

  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsNumber()
  rating: number;

  @IsNumber()
  stock: number;

  @IsString()
  description:string;

}

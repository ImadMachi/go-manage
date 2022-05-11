import { IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsNumber()
  price: number;

  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsNumber()
  rating: number;

  

  @IsString()
  description:string;

}
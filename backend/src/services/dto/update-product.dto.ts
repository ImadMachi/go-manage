import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateServiceDto {
  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsNumber()
  rating: number;

  

  @IsOptional()
  @IsNumber()
  description:string;
}

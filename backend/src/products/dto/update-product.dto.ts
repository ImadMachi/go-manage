import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsNumber()
  rating: number;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsNumber()
  description: string;
}

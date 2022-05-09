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
  imag: string;

  @IsOptional()
  @IsNumber()
  rating: number;

 @IsOptional()
  @IsString()
  promo: string;
}
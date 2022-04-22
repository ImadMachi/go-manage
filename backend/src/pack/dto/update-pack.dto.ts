import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePackDto {
  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  date: string;
}

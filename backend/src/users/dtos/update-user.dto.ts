import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  businessSector: string;

  @IsOptional()
  @IsString()
  website: string;

  @IsOptional()
  @IsNumber()
  size: number;

  @IsOptional()
  @IsString()
  companyName: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsNumber()
  zip: number;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  fix: string;

  @IsOptional()
  @IsString()
  phone: string;
}

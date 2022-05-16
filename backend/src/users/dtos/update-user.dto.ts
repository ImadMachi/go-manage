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
  field: string;

  @IsOptional()
  @IsNumber()
  @Max(1000)
  @Min(0)
  size: number;

  @IsOptional()
  @IsString()
  socialReason: string;

  @IsOptional()
  @IsString()
  address: string;

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

  @IsOptional()
  @IsString()
  businessSector: string;

  @IsOptional()
  @IsString()
  website: string;

  @IsOptional()
  @IsString()
  companyName: string;

  @IsOptional()
  @IsNumber()
  zip: number;
}

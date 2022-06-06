import { IsBoolean, IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateSupplierDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}

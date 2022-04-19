import { IsEmail, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  field: string;

  @IsNumber()
  @Max(1000)
  @Min(0)
  size: number;

  @IsString()
  socialReason: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  fix: string;

  @IsString()
  phone: string;
}

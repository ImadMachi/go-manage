import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateAccountsDto {
  @IsString()
  socialReason: string;

  @IsString()
  address: string;

  @IsString()
  zip: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsNumber()
  rc: number;

  @IsNumber()
  ice: number;

  @IsString()
  ref: string;

  @IsString()
  phone: string;

  @IsString()
  currency: string;
}

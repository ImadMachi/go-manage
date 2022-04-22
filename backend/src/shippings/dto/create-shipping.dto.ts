import {  IsNumber, IsString } from 'class-validator';
export class CreateShippingDto {
  @IsString()
  phone: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  region: string;

  @IsString()
  lastName: string;

  @IsString()
  firstName: string;

  @IsString()
  zip: string;

  @IsString()
  address1: string;

  @IsString()
  address2: string;

  @IsNumber()
  reference: number;
 

}

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
  adresse1: string;

  @IsString()
  adresse2: string;

  @IsNumber()
  reference: number;
 

}

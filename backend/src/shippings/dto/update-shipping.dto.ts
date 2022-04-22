import {  IsString ,IsOptional} from 'class-validator';
export class UpdateShippingDto {
  
@IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  region: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  firstName: string;
 
  @IsOptional()
  @IsString()
  zip: string;

  @IsOptional()
  @IsString()
  adresse1: string;
 
  @IsOptional()
  @IsString()
  adresse2: string;

   
  @IsOptional()
  @IsString()
  phone: string;
}

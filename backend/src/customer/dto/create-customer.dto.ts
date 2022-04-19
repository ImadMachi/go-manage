import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {

@IsNumber()
id:number;

  @IsString()
  lastName: string;

  @IsString()
  fistName: string;

  @IsString()
  reference: string;

  @IsString()
  adress: string;

  @IsString()
  phone: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  category: string;

  @IsString()
  type: string;
}

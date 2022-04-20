import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  lastName: string;

  @IsString()
  firstName: string;

  @IsString()
  reference: string;

  @IsString()
  address: string;

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

  @IsString()
  creationDate: string;

  @IsString()
  paymentDate: string;
}

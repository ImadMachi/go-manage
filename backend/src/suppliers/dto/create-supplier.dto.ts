import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateSupplierDto {
  // @IsEmail() for test purpose
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  // @IsBoolean()
  // isDeleted: boolean;
}

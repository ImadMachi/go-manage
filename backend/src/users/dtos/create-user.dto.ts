import { IsEmail, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { Role } from 'src/auth/enums/role.enum';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  // @IsNumber()
  // @Max(1000)
  // @Min(0)
  // size: number;

  // @IsString()
  // address: string;

  // @IsString()
  // city: string;

  // @IsString()
  // country: string;

  // @IsString()
  // fix: string;

  // @IsString()
  // businessSector: string;

  // @IsString()
  // website: string;

  // @IsString()
  // companyName: string;

  // @IsNumber()
  // zip: number;
}

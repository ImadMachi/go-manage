import { IsEmail, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { Role } from 'src/auth/enums/role.enum';

export class CreateUserDto {
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

  // @IsOptional()
  // @IsString()
  // roles: Role[];
}

import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  lastName: string;

  @IsString()
  fistName: string;

  @IsString()
  password: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  role: string;
}

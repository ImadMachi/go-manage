import {
    IsEmail,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
  } from 'class-validator';
  
  export class UpdateCustomerDto {
    @IsOptional()
    @IsString()
    firstName: string;
  
    @IsOptional()
    @IsString()
    lastName: string;
  
    @IsOptional()
    @IsString()
    category: string;
  
  
    @IsOptional()
    @IsString()
    type: string;
  
    @IsOptional()
    @IsString()
    address: string;
  
    @IsOptional()
    @IsString()
    city: string;
  
    @IsOptional()
    @IsString()
    country: string;
  
    
    @IsOptional()
    @IsString()
    phone: string;
  }
  
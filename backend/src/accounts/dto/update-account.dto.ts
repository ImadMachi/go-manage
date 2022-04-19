import {
    
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
  } from 'class-validator';
  
  export class UpdateAccountDto {
    @IsOptional()
    @IsString()
    socialReason: string;
  
    @IsOptional()
    @IsString()
    address: string;
  
    @IsOptional()
    @IsString()
    zip: string;

    
    @IsOptional()
    @IsString()
    city: string;

  
    @IsOptional()
    @IsString()
    contry: string;
/*
    @IsOptional()
    @IsNumber()
    @Max(1000)
    @Min(0)
    rc: number;
  
    @IsOptional()
    @IsNumber()
    @Max(1000)
    @Min(0)
    ice: number;
*/
  
  /*
    @IsOptional()
    @IsString()
    ref: string;*/
  
    @IsOptional()
    @IsString()
    phone: string;
  
    @IsOptional()
    @IsString()
    currency: string;
  
  
  }
  
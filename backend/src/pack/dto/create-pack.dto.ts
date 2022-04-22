import {  IsNumber, IsString } from 'class-validator';



export class CreatePackDto {
  @IsString()
  ref: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  date: string;
}

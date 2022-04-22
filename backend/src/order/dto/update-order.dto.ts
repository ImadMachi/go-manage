import { IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateOrderDto {
   
  
    @IsOptional()
   @IsString()
   date: string;
  
   @IsOptional()
    @IsString()
    description: string;
}
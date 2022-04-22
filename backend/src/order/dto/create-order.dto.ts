import { IsNumber, IsString } from "class-validator";


export class CreateOrderDto {
 @IsNumber()
 reference:number;
  
   @IsString()
   date: string;
  
    @IsString()
    description: string;
}
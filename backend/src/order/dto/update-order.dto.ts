import { IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateOrderDto {

  
    @IsOptional()
    @IsString()
    billingName: string;
  
    @IsOptional()
    @IsNumber()
    total:number;
  
    @IsOptional()
    @IsString()
    paymentStatus:string;
  
    @IsOptional()
    @IsString()
    paymentMethod:string;
}
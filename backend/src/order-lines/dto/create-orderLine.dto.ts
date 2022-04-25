import { IsNumber, IsString } from "class-validator";


export class CreateOrderLineDto {
 @IsNumber()
 reference:number;
  
   @IsNumber()
   qte: number;
  
    @IsString()
    description: string;

    //ranzid prosuit rah blati ncreeih o bit nzid order
}
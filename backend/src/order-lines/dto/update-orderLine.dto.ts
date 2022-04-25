import { IsNumber, IsString } from "class-validator";


export class UpdateOrderLineDto {
 
  
   @IsNumber()
   qte: number;
  
    @IsString()
    description: string;

    //ranzid prosuit rah blati ncreeih o bit nzid order
}
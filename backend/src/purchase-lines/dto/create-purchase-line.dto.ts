
 import { IsNumber, IsString } from 'class-validator';
  export class CreatePurchaseLineDto {
   

    
      @IsNumber()
      qty: number;
    }
  
  


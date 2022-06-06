
  import { IsArray, IsDateString ,IsNumber,IsString} from 'class-validator';
  export class CreatePurchaseDto {

  
   
    
 
      @IsDateString()
      creationDate: Date;
    
     
    
    
    
      @IsNumber()
      supplierId: number;
    
      @IsArray()
      products: Array<{ id; qty }>;
    }


import { IsNumber, IsString } from 'class-validator';

export class UpdatePurchaseLineDto {

 


  @IsNumber()
  qty: number;
}


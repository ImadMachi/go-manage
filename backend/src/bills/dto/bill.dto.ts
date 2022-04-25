import { Expose } from "class-transformer";




export class BillDto {

    @Expose()
    id: number;

  @Expose()
 description: string;

  @Expose()
  qte: number;

  @Expose()
  unitPrice: number;

  @Expose()
  tva: number;

  @Expose()
  totalHt: number;

  @Expose()
  numBill: string;

  @Expose()
  totalTtc: number;

 
}
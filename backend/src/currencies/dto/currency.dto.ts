import { Expose } from "class-transformer";

export class CurrencyDto {
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
  numCurrency: string;

  @Expose()
  totalTtc: number;

 
}

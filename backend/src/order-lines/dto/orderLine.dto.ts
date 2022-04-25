import { Expose } from 'class-transformer';


export class OrderLineDto {
  @Expose()
  id: number;

  @Expose()
  reference: number;

  @Expose()
  qte: number;

  @Expose()
  description: string;

  //ranzid prosuit rah blati ncreeih o bit nzid order
}

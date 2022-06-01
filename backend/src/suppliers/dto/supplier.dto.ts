import { Expose } from 'class-transformer';

export class SupplierDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  address: string;

  @Expose()
  phone: string;

  @Expose()
  isActive: boolean;

  

//   @Expose()
//   orders: number;

  @Expose()
  creationDate: number;
}
import { Expose } from 'class-transformer';

export class CustomerDto {
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

  @Expose()
  totalSpent: number;

  @Expose()
  orders: number;

  @Expose()
  creationDate: number;
}

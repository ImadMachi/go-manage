import { Expose } from 'class-transformer';

export class CustomerDto {
  @Expose()
  id: number;

  @Expose()
  lastName: string;

  @Expose()
  firstName: string;

  @Expose()
  reference: string;

  @Expose()
  address: string;

  @Expose()
  phone: string;

  @Expose()
  city: string;

  @Expose()
  country: string;

  @Expose()
  category: string;

  @Expose()
  type: string;

  @Expose()
  creationDate: string;

  @Expose()
  paymentDate: string;

  @Expose()
  email: string;

  @Expose()
  userId: number;

  @Expose()
  isActive: boolean;
}

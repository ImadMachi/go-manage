import { Expose } from 'class-transformer';

export class CompanyDto {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  field: string;

  @Expose()
  size: number;

  @Expose()
  socialReason: string;

  @Expose()
  address: string;

  @Expose()
  city: string;

  @Expose()
  country: string;

  @Expose()
  fix: string;

  @Expose()
  phone: string;
}

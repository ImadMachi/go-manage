import { Expose } from 'class-transformer';
import { Role } from 'src/auth/enums/role.enum';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  size: number;

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

  @Expose()
  isActive: boolean;

  @Expose()
  businessSector: string;

  @Expose()
  website: string;

  @Expose()
  companyName: string;

  @Expose()
  zip: number;

  @Expose()
  roles: Role[];
}

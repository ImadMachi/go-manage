import { Expose } from 'class-transformer';
import { Role } from 'src/auth/enums/role.enum';
import { Pack } from 'src/packs/pack.entity';

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

  @Expose()
  isActive: boolean;

  @Expose()
  roles: Role[];
}

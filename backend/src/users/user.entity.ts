import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from 'src/auth/enums/role.enum';
import { Customer } from 'src/customer/customer.entity';
import { Pack } from 'src/packs/pack.entity';
import { Customer } from 'src/customer/customer.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  field: string;

  @Column()
  size: number;

  @Column()
  socialReason: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  fix: string;

  @Column()
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'enum', enum: Role, default: [Role.User] })
  roles: Role[];

  @OneToMany(() => Pack, (pack) => pack.user, { cascade: true })
  packs: Pack[];

  @OneToMany(() => Customer, (customer) => customer.user, { cascade: true })
  customers: Customer[];
}

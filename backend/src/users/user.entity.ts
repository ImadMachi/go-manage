import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from 'src/auth/enums/role.enum';
import { Customer } from 'src/customer/customer.entity';
import { Pack } from 'src/packs/pack.entity';
import { Product } from 'src/products/product.entity';
import { Stock } from 'src/stocks/stock.entity';
import { Supplier } from 'src/suppliers/supplier.entity';

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
  businessSector: string;

  @Column()
  website: string;

  @Column()
  size: number;

  @Column()
  companyName: string;

  @Column()
  address: string;

  @Column()
  zip: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  fix: string;

  @Column()
  phone: string;

  @Column()
  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'enum', enum: Role, default: [Role.User] })
  roles: Role[];

  @OneToMany(() => Pack, (pack) => pack.user, { cascade: true })
  packs: Pack[];

  @OneToMany(() => Customer, (customer) => customer.user, { cascade: true })
  customers: Customer[];

  @OneToMany(() => Product, (product) => product.user, { cascade: true })
  products: Product[];

  @OneToMany(() => Stock, (stock) => stock.user, { cascade: true })
  stocks: Stock[];

  @OneToMany(() => Supplier, (suppliers) => suppliers.user, { cascade: true })
  suppliers: Supplier[];
}

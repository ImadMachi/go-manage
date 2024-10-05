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

  @Column({nullable: true})
  businessSector: string;

  @Column({nullable: true})
  website: string;

  @Column({nullable: true})
  size: number;

  @Column({nullable: true})
  companyName: string;

  @Column({nullable: true})
  address: string;

  @Column({nullable: true})
  zip: number;

  @Column({nullable: true})
  city: string;

  @Column({nullable: true})
  country: string;

  @Column({nullable: true})
  fix: string;

  @Column({nullable: true})
  phone: string;

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

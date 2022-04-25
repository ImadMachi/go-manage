import { Customer } from 'src/customer/customer.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shipping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  region: string;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  zip: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  reference: number;

  //  @ManyToOne(() => Customer, (customer) => customer.shippings)
  //  customer:Customer;
}

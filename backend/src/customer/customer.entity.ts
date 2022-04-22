import { Transform } from 'class-transformer';
import { Account } from 'src/accounts/account.entity';
import { Bill } from 'src/bills/bill.entity';
import { Order } from 'src/order/order.entity';

import { Shipping } from 'src/shippings/shipping.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer extends Account{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  address: string;

  @Column()
  category: string;

  @Column()
  phone: string;

  @Column()
  type: string;

  @Column()
  reference: string;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  creationDate: Date;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  paymentDate: Date;

  @OneToMany(() => Bill, (bill) => bill.customer)
  bills:Bill[];

  @OneToMany(() => Shipping, (shipping) => shipping.customer)
  shippings:Shipping[];

  @OneToMany(() => Order, (order) => order.customer)
  orders:Order[];
}


import { Transform } from 'class-transformer';
import { Bill } from 'src/bills/bill.entity';

import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

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
  reference: string;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  creationDate: Date;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  paymentDate: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.customers, { onDelete: 'CASCADE' })
  user: User;

  // @OneToMany(() => Bill, (bill) => bill.customer)
  // bills: Bill[];

  // @OneToMany(() => Shipping, (shipping) => shipping.customer)
  // shippings: Shipping[];

  // @OneToMany(() => Order, (order) => order.customer)
  // orders: Order[];
}

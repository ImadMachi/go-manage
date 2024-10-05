import { Bill } from 'src/bills/bill.entity';
import { Order } from 'src/order/order.entity';
import { Task } from 'src/tasks/task.entity';
import { Quote } from 'src/quotes/quote.entity';
import { Shipping } from 'src/shippings/shipping.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ default: 0 })
  totalSpent: number;

  @Column({ default: 0 })
  ordersCount: number;

  @Column({ default: 1 })
  creationDate: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.customers, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => Order, (order) => order.customer, { cascade: true })
  orders: Order[];

  @OneToMany(() => Bill, (bill) => bill.customer, { cascade: true })
  bills: Bill[];

  @OneToMany(() => Task, (task) => task.customer, { cascade: true })
  tasks: Task[];

  // @OneToMany(() => Quote, (quote) => quote.customer, { cascade: true })
  // quotes:Quote[];

  @OneToMany(() => Shipping, (shippings) => shippings.customer, { cascade: true })
  shippings: Shipping[];

  @OneToMany(() => Quote, (quotes) => quotes.customer, { cascade: true })
  quotes: Quote[];
}

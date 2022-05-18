import { Bill } from 'src/bills/bill.entity';
import { Customer } from 'src/customer/customer.entity';
import { OrderLine } from 'src/order-lines/orderLine.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: number;

  @Column()
  billingName: string;

  @Column()
  total: number;

  @Column()
  paymentStatus: string;

  @Column()
  paymentMethod: string;

  @Column()
  customerId: number;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.order, { cascade: true })
  orderLines: OrderLine[];

  @ManyToOne(() => Customer, (customer) => customer.orders ,{onDelete: 'CASCADE'})
  customer: Customer;

  @OneToOne(()=>Bill,(bill)=>bill.order,{onDelete: 'CASCADE'})
  bill:Bill;
}

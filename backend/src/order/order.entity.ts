import { Bill } from 'src/bills/bill.entity';
import { Customer } from 'src/customer/customer.entity';
import { OrderLine } from 'src/order-lines/orderLine.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  creationDate: Date;

  @Column()
  totalPrice: number;

  @Column()
  paymentStatus: string;

  @Column()
  paymentMethod: string;

  @Column({ type: 'date' })
  paymentDate: Date;

  @Column()
  isDelivered: boolean;

  @Column({ type: 'date' })
  deliveringDate: Date;

  @Column()
  vat: number;

  @Column()
  customerId: number;

  @Column()
  billId: number;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.order, { cascade: true })
  orderLines: OrderLine[];

  @ManyToOne(() => Customer, (customer) => customer.orders, { onDelete: 'CASCADE' })
  customer: Customer;

  @OneToOne(() => Bill, (bill) => bill.order, { onDelete: 'CASCADE' })
  bill: Bill;
}

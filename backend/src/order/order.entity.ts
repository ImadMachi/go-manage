import { Bill } from 'src/bills/bill.entity';
import { Customer } from 'src/customer/customer.entity';
import { OrderLine } from 'src/order-lines/orderLine.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DeliveryStatus } from './enums/deliveryStatus.enum';
import { PaymentMethod } from './enums/paymentMethod.enum';
import { PaymentStatus } from './enums/paymentStatus.enum';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  creationDate: Date;

  @Column({ type: 'enum', enum: PaymentStatus, default: [PaymentStatus.Pending] })
  paymentStatus: PaymentStatus[];

  @Column({ type: 'enum', enum: PaymentMethod })
  paymentMethod: PaymentMethod[];

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  paymentDate: Date;

  @Column({ type: 'enum', enum: DeliveryStatus, default: [DeliveryStatus.Pending] })
  deliveryStatus: DeliveryStatus[];

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
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

import { Customer } from 'src/customer/customer.entity';
import { Order } from 'src/order/order.entity';
import { Column, Entity, ManyToOne,OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shipping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numQuote: string;

  @Column()
  description: string;

  @Column()
  qte: number;

  @Column()
  unitePrice: number;

  @Column()
  tva: number;

  @Column()
  totalHt: number;

  @Column()
  totalTtc: number;

  @ManyToOne(() => Customer, (customer) => customer.shippings, { onDelete: 'CASCADE' })
  customer: Customer;

  @OneToOne(() => Order, (order) => order.shipping, { cascade: true })
  order: Order;


}
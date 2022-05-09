import { Order } from 'src/order/order.entity';
import { Product } from 'src/products/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderLine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: number;

  @Column()
  productId: number;

  @Column()
  qty: number;

  @ManyToOne(() => Order, (order) => order.orderLines)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderLines)
  product: Product;

  //ranzid prosuit rah blati ncreeih o bit nzid order
}

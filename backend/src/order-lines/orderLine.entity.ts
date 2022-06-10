import { Order } from 'src/order/order.entity';
import { Product } from 'src/products/product.entity';
import { Service } from 'src/services/Services.entity';
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

  @ManyToOne(() => Order, (order) => order.orderLines, { onDelete: 'CASCADE' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderLines, { onDelete: 'CASCADE' })
  product: Product;

  
  @ManyToOne(() => Service, (service) => service.orderLines, { onDelete: 'CASCADE' })
  service: Service;
}

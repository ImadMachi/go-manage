import { OrderLine } from 'src/order-lines/orderLine.entity';
import { Column, Entity,  OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  title: string;

  @Column()
  userId:number;


  @Column()
  imag: string;

  
  @Column()
  rating: number;

  
  @Column()
  promo: string;

 

  @OneToMany(() => OrderLine, (orderLine) => orderLine.product, { onDelete: 'CASCADE' })
 orderLine: OrderLine[];
}
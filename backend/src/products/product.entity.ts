import { OrderLine } from 'src/order-lines/orderLine.entity';
import { PurchaseLine } from 'src/purchase-lines/purchase-line.entity';
import { QuoteProduct } from 'src/quote-product/quote-product.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  category: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  rating: number;

  @Column()
  stock: number;

  @Column()
  description: string;

  @Column()
  userId: number;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.product, { cascade: true })
  @JoinColumn()
  orderLines: OrderLine[];

  @ManyToOne(() => User, (user) => user.products, { onDelete: 'CASCADE' })
  user: User;

@OneToMany(()=>PurchaseLine,(purchaseLine)=>purchaseLine.productId,{cascade:true})
purchaseLines:PurchaseLine[];
  
  @OneToMany(() => QuoteProduct, (quoteProduct) => quoteProduct.product, { cascade :true })
  quoteProducts: QuoteProduct[];

}

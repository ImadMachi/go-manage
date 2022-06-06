import { Product } from 'src/products/product.entity';
import { Purchase } from 'src/purchase/purchase.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PurchaseLine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  purchaseId: number;

  @Column()
  productId: number;

  @Column()
  qty: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.purchaseLines, { onDelete: 'CASCADE' })
  purchase: Purchase;

  @ManyToOne(() => Product, (product) => product.purchaseLines, { onDelete: 'CASCADE' })
  product: Product;
}

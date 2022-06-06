import { Product } from 'src/products/product.entity';
import { Quote } from 'src/quotes/quote.entity';
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuoteProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quoteId: number;

  @Column()
  productId: number;

  @Column()
  qty: number;

  @ManyToOne(() => Quote, (quote) => quote.quoteProducts, { onDelete: 'CASCADE' })
  quote: Quote;

  @ManyToOne(() => Product, (product) => product.quoteProducts, { onDelete: 'CASCADE' })
  product: Product;
}

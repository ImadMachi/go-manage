import { IsArray, IsNumber } from 'class-validator';
import { Customer } from 'src/customer/customer.entity';
import { QuoteProduct } from 'src/quote-product/quote-product.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNumber()
  customerId: number;

  @Column({ type: 'date' })
  creationDate: Date;

  @IsNumber()
  vat: number;

  @IsArray()
  products: Array<{ id; qty }>;

  @ManyToOne(() => Customer, (customer) => customer.quotes, { onDelete: 'CASCADE' })
  customer: Customer;

  @OneToMany(() => QuoteProduct, (quoteProduct) => quoteProduct.quote, { cascade: true })
  quoteProducts: QuoteProduct[];
}

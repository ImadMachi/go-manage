import { PurchaseLine } from 'src/purchase-lines/purchase-line.entity';
import { Supplier } from 'src/suppliers/supplier.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  creationDate: Date;

  @Column()
  supplierId: number;

  // @Column()
  // billId: number;

  @OneToMany(() => PurchaseLine, (purchaseLine) => purchaseLine.purchase, { cascade: true })
  purchaseLines: PurchaseLine[];

  @ManyToOne(() => Supplier, (supplier) => supplier.purchases, { onDelete: 'CASCADE' })
  supplier: Supplier;

  // @OneToOne(() => Bill, (bill) => bill.order, { onDelete: 'CASCADE' })
  // bill: Bill;

  // @OneToOne(() => Shipping, (shipping) => shipping.order, { onDelete: 'CASCADE' })
  // shipping: Shipping;
}

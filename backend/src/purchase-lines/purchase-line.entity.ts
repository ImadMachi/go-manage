import { Product } from "src/products/product.entity";
import { Purchase } from "src/purchase/purchase.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class PurchaseLine {
@PrimaryColumn()
id:number;

@Column()
purchaseId:number;

@Column()
productId:number;

@ManyToOne(() =>Purchase, (purchase) => purchase.purchaseLines, { onDelete: 'CASCADE' })
purchase: Purchase;

@ManyToOne(() =>Product, (product) => product.purchaseLines, { onDelete: 'CASCADE' })
product: Product;

}

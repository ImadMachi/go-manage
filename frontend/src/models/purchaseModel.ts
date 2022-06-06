import { Product } from "./productModel";
import { Supplier } from "./supplierModel";

export interface Purchase {
  id: number;
  creationDate: string;

  supplierId: number;
  date: number;
  total: number;
  supplier: Supplier;
  purchaseLines: [
    {
      id: number;
      qty: number;
      product: Product;
    }
  ];
}
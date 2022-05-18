import { Product } from "./productModel";

export interface Stock {
  id: number;
  qty: number;
  creationDate: string;
  warehouse: string;
  product: Product;
}

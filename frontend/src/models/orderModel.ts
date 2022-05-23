import { Customer } from "./customerModel";
import { Product } from "./productModel";

export interface Order {
  id: number;
  creationDate: string;
  paymentStatus: string;
  paymentMethod: string;
  paymentDate: string;
  deliveryStatus: string;
  deliveringDate: string;
  vat: number;
  customerId: number;
  billId: number;
  date: number;
  total: number;
  customer: Customer;
  orderLines: [
    {
      id: number;
      qty: number;
      product: Product;
    }
  ];
}

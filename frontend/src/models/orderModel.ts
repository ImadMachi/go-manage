export interface Order {
  id: number;
  date: number;
  billingName: string;
  total: number;
  paymentStatus: string;
  paymentMethod: string;
  customerId: number;
}

export interface Order {
  id: number;
  billingName: string;
  paymentStatus: string;
  paymentMethod: string;
  total: number;
  date: number;
  customerId: number;
}

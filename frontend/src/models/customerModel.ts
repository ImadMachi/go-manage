export interface Customer {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  isActive: boolean;
  totalSpent: number;
  orders: number;
  creationDate: number;
}

import { Customer } from "./customerModel";

export interface Task {
  id: number;
  task: string;
  dueDate: string;
  status: string;
  priority: string;
  customer: Customer;
}

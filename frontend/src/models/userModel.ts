export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  size: number;
  address: string;
  city: string;
  country: string;
  fix: string;
  phone: string;
  isActive: boolean;
  businessSector: string;
  website: string;
  companyName: string;
  zip: number;
  roles: "user" | "admin" | "super-admin";
}

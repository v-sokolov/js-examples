// User service
export interface User {
  name: string;
  email: string;
  role: string;
}

export interface IUserService {
  getUser(email: string): User | undefined;
}

// Editing service
export type EditingHistory = Array<{
  name: string;
  options?: unknown;
}>;

export interface IEditingService {
  getEditingHistory(): EditingHistory;
}

// Payment service
export interface Invoice {
  title: string;
  amount: number;
  currency: string;
}

export interface IPaymentService {
  getInvoices(): Invoice[];
}

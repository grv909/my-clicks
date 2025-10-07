export interface Transaction {
  id: string;
  merchant: string;
  category: string;
  date: string; // ISO date string
  amount: number;
  type: 'income' | 'expense';
}

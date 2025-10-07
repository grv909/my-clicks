export interface Account {
  id: string;
  accountName: string;
  accountNumber: string;
  accountType: 'Checking' | 'Savings' | 'Credit Card' | 'Loan';
  balance: number;
}

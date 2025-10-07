import { Component, signal } from '@angular/core';
import { SummaryCardComponent } from '../../shared/summary-card/summary-card.component';
import { TransactionItemComponent } from '../../shared/transaction-item/transaction-item.component';
import { ReminderComponent } from '../../shared/reminder/reminder.component';
import { DashboardCardComponent } from '../../shared/dashboard-card/dashboard-card.component';
import { SummaryCardData } from '../../core/models/summary-card.model';
import { Account } from '../../core/models/account.model';
import { Transaction } from '../../core/models/transaction.model';
import { Reminder } from '../../core/models/reminder.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SummaryCardComponent,
    TransactionItemComponent,
    ReminderComponent,
    DashboardCardComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  readonly summaryData = signal<SummaryCardData[]>([
    {
      icon: '💰',
      title: 'Total Assets',
      value: '$1,200.00',
      change: {
        percentage: '2.5%',
        isPositive: true,
      },
    },
    {
      icon: '📈',
      title: 'Revenue',
      value: '$4,560.00',
      change: {
        percentage: '1.2%',
        isPositive: true,
      },
    },
    {
      icon: '🛒',
      title: 'Expenses',
      value: '$1,230.00',
      change: {
        percentage: '0.5%',
        isPositive: false,
      },
    },
    {
      icon: '👥',
      title: 'Customers',
      value: '432',
      change: {
        percentage: '3.1%',
        isPositive: true,
      },
    },
  ]);

  accounts = signal<Account[]>([
    {
      id: '1',
      accountName: 'Primary Checking',
      accountNumber: '****1234',
      accountType: 'Checking',
      balance: 15420.5,
    },
    {
      id: '2',
      accountName: 'Savings Account',
      accountNumber: '****5678',
      accountType: 'Savings',
      balance: 8200.75,
    },
  ]);

  transactions = signal<Transaction[]>([
    {
      id: '1',
      merchant: 'Whole Foods Market',
      category: 'Groceries',
      date: '2025-01-06',
      amount: -125.5,
      type: 'expense',
    },
    {
      id: '2',
      merchant: 'ABC Corporation',
      category: 'Salary',
      date: '2025-01-05',
      amount: 8500,
      type: 'income',
    },
    {
      id: '3',
      merchant: 'Property Management Co',
      category: 'Rent',
      date: '2025-01-04',
      amount: -850,
      type: 'expense',
    },
  ]);

  reminders = signal<Reminder[]>([
    {
      id: 'notif_001',
      type: 'payment_due',
      message: 'Auto loan payment due in 3 days',
      dueDate: '2025-01-10',
      priority: 'high',
    },
    {
      id: 'notif_002',
      type: 'insurance_renewal',
      message: 'Life insurance premium due in 13 days',
      dueDate: '2025-01-20',
      priority: 'medium',
    },
    {
      id: 'notif_003',
      type: 'low_balance',
      message: 'Credit card balance approaching limit',
      priority: 'low',
    },
  ]);
}

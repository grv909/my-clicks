import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { InsuranceLoansComponent } from './pages/insurance-loans/insurance-loans.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'insurance-loans', component: InsuranceLoansComponent },
];

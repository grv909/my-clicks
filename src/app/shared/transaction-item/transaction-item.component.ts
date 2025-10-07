import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../core/models/account.model';
import { JsonPipe, NgIf } from '@angular/common';
import { Transaction } from '../../core/models/transaction.model';

@Component({
  selector: 'app-transaction-item',
  standalone: true,
  imports: [],
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.scss',
})
export class TransactionItemComponent implements OnInit {
  @Input() data!: Account | Transaction;
  account!: Account;
  transaction!: Transaction;

  mode: 'transaction' | 'account' = 'transaction';
  ngOnInit() {
    this.mode = 'merchant' in this.data ? 'transaction' : 'account';
    if (this.mode === 'account') {
      this.account = this.data as Account;
    } else {
      this.transaction = this.data as Transaction;
    }
  }
}

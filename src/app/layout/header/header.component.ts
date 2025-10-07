import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navItems = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Transactions', route: '/transactions' },
    { label: 'Insurance & Loans', route: '/insurance-loans' },
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

import { Component, Input } from '@angular/core';
import { SummaryCardData } from '../../core/models/summary-card.model';

@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
})
export class SummaryCardComponent {
  @Input({ required: true }) data!: SummaryCardData;
}

import { Component, Input } from '@angular/core';
import { Reminder } from '../../core/models/reminder.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.scss',
})
export class ReminderComponent {
  @Input() data!: Reminder;
}

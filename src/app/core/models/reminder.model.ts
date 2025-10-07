export interface Reminder {
  id: string;
  type: string;
  message: string;
  dueDate?: string; // ISO date string
  priority: 'low' | 'medium' | 'high';
}

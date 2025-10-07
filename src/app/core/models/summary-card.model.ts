export interface SummaryCardData {
  icon: string;
  title: string;
  value: string;
  change: {
    percentage: string;
    isPositive: boolean;
  };
}

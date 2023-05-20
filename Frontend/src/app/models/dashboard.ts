/** dashboard page */

export interface IDashboardCardItem {
  type: string;
  number: string;
  money: number;
  url: string;
}
export interface IDashboardDetailTransactionItem {
  date: string;
  type: string;
  title: string;
  money: number;
}
export interface IDashboardDetailItem {
  currentSpend: number;
  typicalSpend: number;
  budgetSet: boolean;
  percentage: string;
  warning: string | boolean;
  myBudget: number;
  remaining?: number;
  overBudgetBy?: number;
  transactions?: IDashboardDetailTransactionItem[];
}
export interface IDashboardItem {
  card: IDashboardCardItem,
  detail: IDashboardDetailItem
}

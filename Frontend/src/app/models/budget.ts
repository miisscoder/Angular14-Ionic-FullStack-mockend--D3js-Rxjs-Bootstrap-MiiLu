/** budget page */
import { IChartTimeLineItem } from './chart-time-line';

export interface IBudgetGrowth {
    count: number;
    budget: number;
    items: IChartTimeLineItem[];
}

export interface IBudgetDetailItem {
    type: string;
    count: number;
    budget: number;
}

export interface IBudgetDetail {
    count: number;
    budget: number;
    items: IBudgetDetailItem[];
}

export interface IBudgetIncome {
    income: number;
    salary: number;
    otherIncome: number;
}
export interface IBudget {
    income: IBudgetIncome;
    spend: IBudgetDetail;
    borrowings: IBudgetDetail;
    protection: IBudgetDetail;
    growth: IBudgetGrowth;
}

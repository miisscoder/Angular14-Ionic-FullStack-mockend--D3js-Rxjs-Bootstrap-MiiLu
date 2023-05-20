/** income page */
export interface IIncomeSpendDiaryDetailItem {
    title: string;
    category: string;
    amount: number;
}
export interface IIncomeSpendDiaryItem {
    date: string;
    details: IIncomeSpendDiaryDetailItem[];
}
export interface IIncomeSpendDataItem {
    category: string;
    percent: number;
    amount: number;
}
export interface IIncomeSpend {
    date: string;
    total: number;
    data: IIncomeSpendDataItem[];
    diary: IIncomeSpendDiaryItem[];
}

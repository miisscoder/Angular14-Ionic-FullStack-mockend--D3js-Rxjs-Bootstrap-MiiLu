/** transactions */

export interface ITransactionDiaryDetailItem {
    title: string;
    category: string;
    amount: number;
}
export interface ITransactionDiaryItem {
    date: string;
    details: ITransactionDiaryDetailItem[];
}
export interface ITransactionIncomeSpendDetailItem {
    date: string;
    title: string;
    percent: number;
    amount: number;
}
export interface ITransactionIncomeSpendItem {
    category: string;
    percent: number;
    amount: number;
    details: ITransactionIncomeSpendDetailItem[]
}
export interface ITransactions {
    date: string;
    totalSpend: number;
    totalIncome: number;
    spend: ITransactionIncomeSpendItem[];
    income: ITransactionIncomeSpendItem[];
    diary: ITransactionDiaryItem[];
}

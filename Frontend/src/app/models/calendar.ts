/** calendar page */
export interface ICalendarDayDataItem {
    title: string;
    category: string;
    amount: number;
}
export interface ICalendarDayData {
    date: number;
    spend: ICalendarDayDataItem[];
    income: ICalendarDayDataItem[];
}
export interface ICalendarMonthData {
    month: string;
    year: string;
    days: ICalendarDayData[];
}
export interface ICalendar {
    date: string;
    totalSpend: number;
    totalIncome: number;
    monthData: ICalendarMonthData[];
}


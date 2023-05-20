import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { IIncomeSpend } from '../../models/incomeSpend';

@Injectable({
    providedIn: 'root'
})
export class IncomeService {

    // income
    private _income$: BehaviorSubject<IIncomeSpend | undefined> = new BehaviorSubject<IIncomeSpend | undefined>(undefined);


    constructor() { }

    /**
     * set income
     * @param income  
     */
    set income(income: IIncomeSpend) {
        this._income$.next(income);
    }

    /**
     * return income
     */
    get income$(): Observable<IIncomeSpend | undefined> {
        return this._income$.asObservable();
    }

} 
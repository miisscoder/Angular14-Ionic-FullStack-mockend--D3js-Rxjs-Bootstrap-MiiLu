import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { IIncomeSpend } from '../../models/incomeSpend';

@Injectable({
    providedIn: 'root'
})
export class SpendService {


    // spend
    private _spend$: BehaviorSubject<IIncomeSpend | undefined> = new BehaviorSubject<IIncomeSpend | undefined>(undefined);


    constructor() { }

    /**
     * set spend
     * @param spend  
     */
    set spend(spend: IIncomeSpend) {
        this._spend$.next(spend);
    }

    /**
     * return spend
     */
    get spend$(): Observable<IIncomeSpend | undefined> {
        return this._spend$.asObservable();
    }

} 
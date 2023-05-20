import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { ITransactions } from '../../models/transactions';

@Injectable({
    providedIn: 'root'
})
export class TransactionsService {


    // transactions
    private _transactions$: BehaviorSubject<ITransactions | undefined> = new BehaviorSubject<ITransactions | undefined>(undefined);


    constructor() { }

    /**
     * set transactions
     * @param transactions  
     */
    set transactions(transactions: ITransactions) {
        this._transactions$.next(transactions);
    }

    /**
     * return transactions
     */
    get transactions$(): Observable<ITransactions | undefined> {
        return this._transactions$.asObservable();
    }
} 
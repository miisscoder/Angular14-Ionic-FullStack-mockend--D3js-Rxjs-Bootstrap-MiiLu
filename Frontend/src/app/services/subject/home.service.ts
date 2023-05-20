import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    // budget left
    private _budgetLeft$: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);


    constructor() { }

    /**
     * set budget left
     * @param budgetLeft 
     */
    set budgetLeft(budgetLeft: number) {
        this._budgetLeft$.next(budgetLeft);
    }

    /**
     * return budget left
     */
    get budgetLeft$(): Observable<number | undefined> {
        return this._budgetLeft$.asObservable();
    }

}

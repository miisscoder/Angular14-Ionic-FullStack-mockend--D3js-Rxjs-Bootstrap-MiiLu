import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBudget } from '../../models/budget';

@Injectable({
    providedIn: 'root'
})
export class BudgetService { 
     

    // budget
    private _budget$: BehaviorSubject<IBudget | undefined> = new BehaviorSubject<IBudget | undefined>(undefined);


    constructor() { }

    /**
     * set budget
     * @param budget budget
     */
    set budget(budget: IBudget) {
        this._budget$.next(budget);
    }

    /**
     * return budget
     */
    get budget$(): Observable<IBudget | undefined> {
        return this._budget$.asObservable();
    }

} 
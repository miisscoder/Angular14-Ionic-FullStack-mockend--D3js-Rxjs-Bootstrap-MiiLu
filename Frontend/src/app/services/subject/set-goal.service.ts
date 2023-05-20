import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { ISetGoal } from '../../models/setGoal';

@Injectable({
    providedIn: 'root'
})
export class SetGoalService {


    // setGoal
    private _setGoal$: BehaviorSubject<ISetGoal | undefined> = new BehaviorSubject<ISetGoal | undefined>(undefined);


    constructor() { }

    /**
     * set setGoal
     * @param setGoal  
     */
    set setGoal(setGoal: ISetGoal) {
        this._setGoal$.next(setGoal);
    }

    /**
     * return setGoal
     */
    get setGoal$(): Observable<ISetGoal | undefined> {
        return this._setGoal$.asObservable();
    }

} 
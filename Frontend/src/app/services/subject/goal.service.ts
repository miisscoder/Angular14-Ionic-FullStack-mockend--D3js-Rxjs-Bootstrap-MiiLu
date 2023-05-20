import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IGoalItem } from '../../models/goal';

@Injectable({
    providedIn: 'root'
})
export class GoalService {

    // goal
    private _goal$: BehaviorSubject<IGoalItem[] | undefined> = new BehaviorSubject<IGoalItem[] | undefined>([]);


    constructor() { }

    /**
     * set goal
     * @param goal goal
     */
    set goal(goal: IGoalItem[]) {
        this._goal$.next(goal);
    }

    /**
     * return goal
     */
    get goal$(): Observable<IGoalItem[] | undefined> {
        return this._goal$.asObservable();
    }

} 
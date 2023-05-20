import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDashboardItem } from '../../models/dashboard';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
     
    // dashboard
    private _dashboard$: BehaviorSubject<IDashboardItem[] | undefined> = new BehaviorSubject<IDashboardItem[] | undefined>([]);


    constructor() { }

    /**
     * set dashboard
     * @param dashboard dashboard
     */
    set dashboard(dashboard: IDashboardItem[]) {
        this._dashboard$.next(dashboard);
    }

    /**
     * return dashboard
     */
    get dashboard$(): Observable<IDashboardItem[] | undefined> {
        return this._dashboard$.asObservable();
    }

} 
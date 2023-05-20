import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICalendar } from '../../models/calendar';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {


    // calendar
    private _calendar$: BehaviorSubject<ICalendar | undefined> = new BehaviorSubject<ICalendar | undefined>(undefined);


    constructor() { }

    /**
     * set calendar
     * @param calendar calendar
     */
    set calendar(calendar: ICalendar) {
        this._calendar$.next(calendar);
    }

    /**
     * return calendar
     */
    get calendar$(): Observable<ICalendar | undefined> {
        return this._calendar$.asObservable();
    }


} 
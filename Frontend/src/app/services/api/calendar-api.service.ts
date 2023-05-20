import { Injectable } from '@angular/core';
import { ApiBaseService } from '../common/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICalendar } from '../../models/calendar';

@Injectable({
    providedIn: 'root'
})
export class CalendarApiService extends ApiBaseService {

    constructor(
        private http: HttpClient,
    ) {
        super('/calendar');
    }

    /**
     * get calendar data
     */
    getCalendar(): Observable<ICalendar> {
        return this.http.get<ICalendar>(this.endpoint('/data'));
    }
     

} 
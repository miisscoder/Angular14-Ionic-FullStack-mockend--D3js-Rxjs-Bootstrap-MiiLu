import { Injectable } from '@angular/core';
import { ApiBaseService } from '../common/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDashboardItem } from '../../models/dashboard';

@Injectable({
    providedIn: 'root'
})
export class DashboardApiService extends ApiBaseService {

    constructor(
        private http: HttpClient,
    ) {
        super('/dashboard');
    }

    /**
     * get dashboard data
     */
    getDashboard(): Observable<IDashboardItem[]> {
        return this.http.get<IDashboardItem[]>(this.endpoint('/data'));
    }
     

} 
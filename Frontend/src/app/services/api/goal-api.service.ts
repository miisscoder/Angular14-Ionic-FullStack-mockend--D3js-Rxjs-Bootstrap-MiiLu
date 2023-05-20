import { Injectable } from '@angular/core';
import { ApiBaseService } from '../common/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGoalItem } from '../../models/goal';

@Injectable({
    providedIn: 'root'
})
export class GoalApiService extends ApiBaseService {

    constructor(
        private http: HttpClient,
    ) {
        super('/goal');
    }

    /**
     * get goal data
     */
    getGoal(): Observable<IGoalItem[]> {
        return this.http.get<IGoalItem[]>(this.endpoint('/data'));
    }
     

} 
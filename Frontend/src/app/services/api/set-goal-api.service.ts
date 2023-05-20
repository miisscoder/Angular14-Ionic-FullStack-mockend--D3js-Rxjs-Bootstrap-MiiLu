import { Injectable } from '@angular/core';
import { ApiBaseService } from '../common/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISetGoal } from '../../models/setGoal';

@Injectable({
    providedIn: 'root'
})
export class SetGoalApiService extends ApiBaseService {

    constructor(
        private http: HttpClient,
    ) {
        super('/setGoal');
    }

    /**
     * get set goal data
     */
    getSetGoal(): Observable<ISetGoal> {
        return this.http.get<ISetGoal>(this.endpoint('/data'));
    }
     

} 
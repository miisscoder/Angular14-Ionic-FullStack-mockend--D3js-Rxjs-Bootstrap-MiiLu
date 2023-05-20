import { Injectable } from '@angular/core';
import { ApiBaseService } from '../common/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApp } from '../../models/app';

@Injectable({
    providedIn: 'root'
})
export class AppApiService extends ApiBaseService {

    constructor(
        private http: HttpClient,
    ) {
        super('/app');
    }

    /**
     * get tickets 
     */
    getApp(): Observable<IApp> {
        return this.http.get<IApp>(this.endpoint('/data'));
    }


    

} 

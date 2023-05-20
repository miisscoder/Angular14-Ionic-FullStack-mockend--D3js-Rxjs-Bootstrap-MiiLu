import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IApp } from '../../models/app';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    // user info
    private _app$: BehaviorSubject<IApp | undefined> = new BehaviorSubject<IApp | undefined>(undefined);


    constructor() { }

    /**
     * set userInfo
     * @param userInfo userInfo
     */
    set app(app: IApp) {
        this._app$.next(app);
    }

    /**
     * return userInfo
     */
    get app$(): Observable<IApp | undefined> {
        return this._app$.asObservable();
    }

}

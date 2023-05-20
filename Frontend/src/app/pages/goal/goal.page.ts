import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Location } from '@angular/common';
import * as _ from 'lodash';
 
import { IGoalItem } from '../../models/goal';
import { finalize } from 'rxjs/operators';
import { GoalApiService } from '../../services/api/goal-api.service';
import { GoalService } from '../../services/subject/goal.service';
import { ToastService, ToastType } from '../../components/toast/service/toast.service';
import { SubscriptionService } from '../../services/common/subscription.service';


@Component({
    selector: 'app-goal',
    templateUrl: 'goal.page.html',
    styleUrls: ['goal.page.scss'],
})
export class GoalPage implements OnInit {
    // loading state
    loading = false;

    // data
    data: IGoalItem[] = [];

    constructor(
        private subscriptionService: SubscriptionService,
        private toastService: ToastService,
        private goalApiService: GoalApiService,
        private goalService: GoalService,
        private menu: MenuController,
        private _location: Location) {
    }

    ngOnInit() {
        this._getGoalData();
    }



    /**
      * get goal data
      */
    private _getGoalData(): void {
        const sub = this.goalApiService.getGoal()
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: (res: IGoalItem[]): void => { 
                    if (!res) { return; }
                    this._onGoalLoaded(res);
                },
                error: e => {
                    this.toastService.open({
                        type: ToastType.error,
                        message: e.message,
                    });
                },
            });

        this.subscriptionService.store('_getGoalData', sub);
        this.loading = true;
    }

    /**
      * handle goal data loaded
      * @param res goal data
      */
    private _onGoalLoaded(res: IGoalItem[]): void {
        this.data = res;
        this.goalService.goal = res;
    }



}

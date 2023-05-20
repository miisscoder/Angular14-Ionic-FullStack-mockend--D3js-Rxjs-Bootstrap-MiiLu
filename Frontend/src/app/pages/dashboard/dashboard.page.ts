import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';  
import { IDashboardItem, IDashboardCardItem, IDashboardDetailItem } from '../../models/dashboard';
import { finalize } from 'rxjs/operators';
import { DashboardApiService } from '../../services/api/dashboard-api.service';
import { DashboardService } from '../../services/subject/dashboard.service';
import { ToastService, ToastType } from '../../components/toast/service/toast.service';
import { SubscriptionService } from '../../services/common/subscription.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


    width = 0;
    height = 0;

    activeCard: number = 3;
    cards: IDashboardCardItem[] = [];
    details: IDashboardDetailItem[] = [];
    data: IDashboardItem[] = [];
     
    modalShow = false; 

    // loading state
    loading = false;

    constructor(
        private subscriptionService: SubscriptionService,
        private toastService: ToastService,
        private dashboardApiService: DashboardApiService,
        private dashboardService: DashboardService ) { }

    ngOnInit() {
        this._getDashboardData(); 


    }

    /**
      * slide change
      */
    onChangeCardSlides(event: number): void { 
        this.activeCard = event;
    }

    /**
      * get dashboard data
      */
    private _getDashboardData(): void {
        const sub = this.dashboardApiService.getDashboard()
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: (res: IDashboardItem[]): void => { 
                    if (!res) { return; }
                    this._onDashboardLoaded(res);
                },
                error: e => {
                    this.toastService.open({
                        type: ToastType.error,
                        message: e.message,
                    });
                },
            });

        this.subscriptionService.store('_getDashboardData', sub);
        this.loading = true;
    }

    /**
      * handle dashboard data loaded
      * @param res dashboard data
      */
    private _onDashboardLoaded(res: IDashboardItem[]): void { 
        this.cards = res.map((t: IDashboardItem): IDashboardCardItem => t['card']); 
        this.details = res.map((t: IDashboardItem): IDashboardDetailItem => t['detail']); 
        this.dashboardService.dashboard = res;
    }

     

    /** show modal */
    onShowModal():void {
        this.modalShow = true;
    }

    /** hide modal */
    onHideModal(): void  {
        this.modalShow = false;
    }

}

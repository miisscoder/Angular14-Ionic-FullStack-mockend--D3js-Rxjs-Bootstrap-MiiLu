import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { IIncomeSpend } from 'src/app/models/incomeSpend';

import { finalize } from 'rxjs/operators';
import { IncomeSpendApiService } from 'src/app/services/api/income-spend-api.service';
import { SpendService } from 'src/app/services/subject/spend.service';
import { ToastService, ToastType } from 'src/app/components/toast/service/toast.service';
import { SubscriptionService } from 'src/app/services/common/subscription.service';

@Component({
  selector: 'app-spend',
  templateUrl: 'spend.page.html',
  styleUrls: ['spend.page.scss'],
})
export class SpendPage implements OnInit {
  // loading state
  loading = false;

  data?: IIncomeSpend;


  constructor(
    private subscriptionService: SubscriptionService,
    private toastService: ToastService,
    private incomeSpendApiService: IncomeSpendApiService,
    private spendService: SpendService) {
  }

  ngOnInit() { 
    this._getSpendData();
  }


  /**
    * get spend data
    */
  private _getSpendData(): void {
    const sub = this.incomeSpendApiService.getSpend()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res: IIncomeSpend): void => { 
          if (!res) { return; }
          this._onSpendLoaded(res);
        },
        error: e => {
          this.toastService.open({
            type: ToastType.error,
            message: e.message,
          });
        },
      });

    this.subscriptionService.store('_getSpendData', sub);
    this.loading = true;
  }

  /**
    * handle spend data loaded
    * @param res spend data
    */
  private _onSpendLoaded(res: IIncomeSpend): void {
    this.data = res;
    this.spendService.spend = res;
  }
  
}

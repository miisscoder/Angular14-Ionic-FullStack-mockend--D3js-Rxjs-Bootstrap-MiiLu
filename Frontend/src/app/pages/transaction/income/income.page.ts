import { Component, OnInit } from '@angular/core'; 
import * as _ from 'lodash'; 
import { IIncomeSpend } from 'src/app/models/incomeSpend';
import { finalize } from 'rxjs/operators';
import { IncomeSpendApiService } from 'src/app/services/api/income-spend-api.service';
import { IncomeService } from 'src/app/services/subject/income.service';
import { ToastService, ToastType } from 'src/app/components/toast/service/toast.service';
import { SubscriptionService } from 'src/app/services/common/subscription.service';

@Component({
  selector: 'app-income',
  templateUrl: 'income.page.html',
  styleUrls: ['income.page.scss'],
})
export class IncomePage implements OnInit {
  // loading state
  loading = false;
   
  data?: IIncomeSpend;  
   

  constructor(
    private subscriptionService: SubscriptionService,
    private toastService: ToastService,
    private incomeSpendApiService: IncomeSpendApiService,
    private incomeService: IncomeService) {
  }

  ngOnInit() {  

    this._getIncomeData();
     
  }


  /**
    * get income data
    */
  private _getIncomeData(): void {
    const sub = this.incomeSpendApiService.getIncome()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res: IIncomeSpend): void => { 
          if (!res) { return; }
          this._onIncomeLoaded(res);
        },
        error: e => {
          this.toastService.open({
            type: ToastType.error,
            message: e.message,
          });
        },
      });

    this.subscriptionService.store('_getIncomeData', sub);
    this.loading = true;
  }

  /**
    * handle income data loaded
    * @param res income data
    */
  private _onIncomeLoaded(res: IIncomeSpend): void {
    this.data = res; 
    this.incomeService.income = res;
  } 
   
}

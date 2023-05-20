import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import * as d3 from 'd3';
import * as _ from 'lodash';
 
import { ITransactions } from '../../models/transactions';
import { finalize } from 'rxjs/operators';
import { TransactionsApiService } from '../../services/api/transactions-api.service';
import { TransactionsService } from '../../services/subject/transactions.service';
import { ToastService, ToastType } from '../../components/toast/service/toast.service';
import { SubscriptionService } from '../../services/common/subscription.service';

@Component({
  selector: 'app-transaction',
  templateUrl: 'transaction.page.html',
  styleUrls: ['transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  // loading state
  loading = false;

  width = 0;
  height = 0;
  card = 0;
  data?: ITransactions;

  slideOpts: any = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1
  };

  // 'spend' or 'income'
  type = 'spend';

  columns:any[] = [
    {
      title: 'category', prop: 'category', sort: true,
      sortDirectionS: 'asc', sortDirectionI: 'asc'
    },
    {
      title: 'percent', prop: 'percent', sort: false,
      sortDirectionS: 'asc', sortDirectionI: 'asc'
    },
    {
      title: 'amount', prop: 'amount', sort: true,
      sortDirectionS: 'asc', sortDirectionI: 'asc'
    }
  ];

  color:any[] = [{
    'category': 'Rent & Utilities',
    'color': '#08a5e1'
  }, {
    'category': 'Travel',
    'color': '#ffa700'
  }, {
    'category': 'Food',
    'color': '#ff5a5a'
  }, {
    'category': 'Shopping',
    'color': '#bc43d3'
  }, {
    'category': 'Tax',
    'color': '#47c684'
  }, {
    'category': 'Income',
    'color': '#08a5e1'
  }, {
    'category': 'Other Income',
    'color': '#ffa700'
  }];

  slideHeight = 0;
  slideShow = false;
  @ViewChild('sliding', { read: ElementRef }) sliding?: ElementRef;

  slideData?: any;

  constructor(
    private subscriptionService: SubscriptionService,
    private toastService: ToastService,
    private transactionsApiService: TransactionsApiService,
    private transactionsService: TransactionsService,
    private menu: MenuController) {
  }

  ngOnInit() {

    this._getTransactionsData();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.card = this.width / (this.width + 16 * 2);

  }

  /**
   * switch button
   * @param event 'spend' or 'income'
   */
  onSwitchType(event: string): void {
    this.type = event;
  }

  /**
    * get transactions data
    */
  private _getTransactionsData(): void {
    const sub = this.transactionsApiService.getTransactions()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res: ITransactions): void => { 
          if (!res) { return; }
          this._onTransactionsLoaded(res);
        },
        error: e => {
          this.toastService.open({
            type: ToastType.error,
            message: e.message,
          });
        },
      });

    this.subscriptionService.store('_getTransactionsData', sub);
    this.loading = true;
  }

  /**
    * handle transactions data loaded
    * @param res transactions data
    */
  private _onTransactionsLoaded(res: ITransactions): void {
    this.data = res;
    //this.drawChart('spend');
    this.transactionsService.transactions = res;
  } 

  /**
   * show slide menu
   * */
  slideMenuShow(): void {
    this.slideShow = true;
  }

  /**
   * hide slide menu
   * */
  slideMenuHide(): void {
    this.slideShow = false;
  }

  /**
   * click row and open slide
   * @param item
   * @param type
   */ 
  onClickRow(item: string, type: string): void {
    if (!this.data) {
      return;
    }
    this.slideData = _.find(_.get(this.data, type),
      (o: any) => o['category'] === item);

    this.slideMenuShow();
  }

}

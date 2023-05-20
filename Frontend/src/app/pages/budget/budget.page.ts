import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Location } from '@angular/common';
import * as d3 from 'd3';
import * as _ from 'lodash';


import { IBudget } from '../../models/budget';
import { finalize } from 'rxjs/operators';
import { BudgetApiService } from '../../services/api/budget-api.service';
import { BudgetService } from '../../services/subject/budget.service';
import { ToastService, ToastType } from '../../components/toast/service/toast.service';
import { SubscriptionService } from '../../services/common/subscription.service';

@Component({
  selector: 'app-budget',
  templateUrl: 'budget.page.html',
  styleUrls: ['budget.page.scss'],
})
export class BudgetPage implements OnInit {
  width = 0;
  height = 0;

  // loading state
  loading = false;

  data?: IBudget;

  slideOpts = {
    initialSlide: 2,
    speed: 400,
    slidesPerView: 2
  };

  slideHeight = 0;
  slideShow = false;
  @ViewChild('sliding', { read: ElementRef }) sliding?: ElementRef;

  constructor(
    private subscriptionService: SubscriptionService,
    private toastService: ToastService,
    private budgetApiService: BudgetApiService,
    private budgetService: BudgetService,
    private menu: MenuController,
    private _location: Location) {
  }

  ngOnInit() {
    this._getBudgetData();

    this.width = window.innerWidth;
    this.height = window.innerHeight;

  }


  /**
    * get budget data
    */
  private _getBudgetData(): void {
    const sub = this.budgetApiService.getBudget()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res: IBudget): void => { 
          if (!res) { return; }
          this._onBudgetLoaded(res);
        },
        error: e => {
          this.toastService.open({
            type: ToastType.error,
            message: e.message,
          });
        },
      });

    this.subscriptionService.store('_getBudgetData', sub);
    this.loading = true;
  }

  /**
    * handle budget data loaded
    * @param res budget data
    */
  private _onBudgetLoaded(res: IBudget): void {
    this.data = res;
    this.budgetService.budget = res;
  }




  slideMenuShow() { 
    this.slideShow = true;
    const __ = this;
    setTimeout(function (o) {
      if (!__.sliding) {
        return;
      }
      __.slideHeight = __.sliding.nativeElement.offsetHeight;
      __.sliding.nativeElement.style.top =
        (__.height - __.slideHeight) + 'px';
    }, 300);
  }

  slideMenuHide() {
    if (!this.sliding) {
      return;
    }
    this.sliding.nativeElement.style.top = '100%';
    this.slideShow = false;

  }

  menuOpen() {
    this.menu.enable(true, 'side');
    this.menu.open('side');
  }

  onBack() {
    this._location.back();
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import * as _ from 'lodash';
import { PickerController } from '@ionic/angular'


import { ISetGoal } from 'src/app/models/setGoal';
import { finalize } from 'rxjs/operators';
import { ToastService, ToastType } from 'src/app/components/toast/service/toast.service';
import { SubscriptionService } from 'src/app/services/common/subscription.service';
import { SetGoalApiService } from 'src/app/services/api/set-goal-api.service';
import { SetGoalService } from 'src/app/services/subject/set-goal.service';

@Component({
  selector: 'app-set-goal',
  templateUrl: 'set-goal.page.html',
  styleUrls: ['set-goal.page.scss'],
})
export class SetGoalPage implements OnInit {

  width = 0;
  height = 0;

  data = {};

  name = 'Cancun Holidays';

  optionsFundingAccount:string[] = [];
  selectedFundingAccount = '';
  expandFundingAccount = false;

  amount = 900;

  optionsCategory: string[]  = [];
  selectedCategory = '';
  expandCategory = false;
  startDate = 0;

  // default 
  items = {
    name: 'Cancun Holidays',
    category: 'Travel',
    amount: '900',
    startDate: '2022-1-1',
    completionMonth: '2017',
    completionYear: '01',
    fundingAccount: '1234567890'
  };


  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;


  constructor( 
    private setAlertApiService: SetGoalApiService,
    private _location: Location) {
    const now = new Date();
    this.items.startDate = now.getFullYear() + '-' +
      ((now.getMonth() + 1) < 10 ? ('0' + (now.getMonth() + 1)) : (now.getMonth() + 1)) + '-' +
      now.getDate();
  }


  ngOnInit() {
    this.setAlertApiService.getSetGoal().subscribe(data => {
      this.data = data;

      this.optionsCategory = data['category'];
      this.selectedCategory = data['category'].length > 0 ?
        data['category'][0] : '';

      this.optionsFundingAccount = data['fundingAccount'];
      this.selectedFundingAccount = data['fundingAccount'].length > 0 ?
        data['fundingAccount'][0] : '';

    });

    this.width = window.innerWidth;
    this.height = window.innerHeight;

  }



  /**
   * select category
   * @param item
   */
  onSelectCategory(i: number): void {
    this.selectedCategory = this.optionsCategory[i as any];
    this.items['category'] = this.selectedCategory;
  }

  /**
   *  select funding account
   * @param item
   */
  onSelectFundingAccount(i: number): void {
    this.selectedFundingAccount = this.optionsFundingAccount[i as any];
    this.items['fundingAccount'] = this.selectedFundingAccount;
  }

  /**
   * save button
   * */
  onSave() {
    // save here
    this._location.back();
  }
}

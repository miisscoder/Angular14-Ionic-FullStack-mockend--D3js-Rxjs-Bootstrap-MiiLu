import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-set-alert',
  templateUrl: 'set-alert.page.html',
  styleUrls: ['set-alert.page.scss'],
})
export class SetAlertPage implements OnInit {
  // loading state
  loading = false;

  width = 0;
  height = 0;

  data = {};
  items = [];

  optionsBudget = ['Overall', 'My Income', 'My Spend', 'My Borrowings',
    'My Growth', 'My Protection'];
  selectedBudget = 'My Spend';

  optionsCategory = ['Consolodated', 'Risk Type'];
  selectedCategory = 'Consolodated';

  disabled = true;


  sliderValue = 50;

  constructor(
    private _location: Location) {
  }


  ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

  }



  /**
   * save button
   * */
  onSave() {
    // save here
    this._location.back();
  }

  /**
   * slider value
   * @param event
   */
  onChange(event: number): void {
    this.sliderValue = event;
  }


  /**
   * select budget
   * @param item
   */

  onSelectBudget(i: number): void {
    this.selectedBudget = this.optionsBudget[i as any];
  }

  /**
   * select category
   * @param item
   */
  onSelectCategory(i: number): void {
    this.selectedCategory = this.optionsCategory[i as any];
  }

}

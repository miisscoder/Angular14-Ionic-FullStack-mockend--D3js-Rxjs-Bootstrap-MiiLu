import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { IIncomeSpend, IIncomeSpendDiaryItem } from 'src/app/models/incomeSpend';

@Component({
  selector: 'app-income-spend',
  templateUrl: 'income-spend.component.html',
  styleUrls: ['income-spend.component.scss'],
})
export class IncomeSpendComponent implements OnInit, OnChanges {

  @Input() data?: IIncomeSpend;
  @Input() type = '';
  diaryData: IIncomeSpendDiaryItem[] = [];
  widthBarChart = 0;
  heightBarChart = 0;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1
  };



  color = [{
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

  constructor() {
    this.widthBarChart = document.documentElement.clientWidth;
    const rem = document.documentElement.clientWidth / 10.8;
    this.heightBarChart = document.documentElement.clientHeight -
      ((0.85 + 0.5 + 0.6) + (0.8 * 2) + (2 + 0.32) + 2.5) * rem;
  }

  ngOnInit() {
    if (!this.data) {
      return;
    }
    this.diaryData = this.data['diary']; 
  }

  ngOnChanges() {
    if (!this.data) {
      return;
    }
    this.diaryData = this.data['diary']; 
  }


  /**
   * when clicking type item under bar chart
   * @param type
   */
  onType(type: string): void {
    if (!this.data) { return; }
    if ('' === type) {
      this.diaryData = this.data['diary'];
      return;
    }
    this.diaryData = [];
    this.data['diary'].forEach((d: any) => {
      this.diaryData.push({
        'date': d['date'],
        'details': _.filter(d['details'],
          o => _.toLower(o['category']) === _.toLower(type))
      });
    });
  }



  /**
   * get catogery items for chart bottom
   * */
  getCatogeryItem(): string[] {
    if (!this.data) {
      return [];
    }
    return this.data[`data`].map(o => o[`category`]);

  }

  /**
   * capitalize title
   * */
  getTitle(): string {
    if (this.type.length === 0) {
      return '';
    }
    return this.type.replace(this.type[0], this.type[0].toUpperCase());
  }
}

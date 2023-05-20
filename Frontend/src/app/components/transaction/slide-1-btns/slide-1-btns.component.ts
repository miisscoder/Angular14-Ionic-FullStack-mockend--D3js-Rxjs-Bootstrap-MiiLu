import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { numberCommasToString } from '../../../utils/number.util';
import { ITransactions } from '../../../models/transactions';
import { IChartDonutItem } from '../../../models/chart-donut';
import * as _ from 'lodash';


@Component({
  selector: 'app-slide-1-btns',
  templateUrl: 'slide-1-btns.component.html',
  styleUrls: ['slide-1-btns.component.scss'],
})
export class Slide1BtnsComponent implements OnInit, OnChanges {
  @Input() data?: ITransactions;
  @Output() switch: EventEmitter<string> = new EventEmitter<string>();

  radius = 0;
  type: string = 'spend';
  dataChart: IChartDonutItem[] = [];

  constructor(
  ) {
    this.radius = (window.innerWidth - 16 * 2) * 0.225 / 2;
  }

  ngOnChanges() {
    this.getChartData();
  }

  ngOnInit() {
    this.getChartData();
  }
  /**
  * 1000.00 => '1,000.00'
  * @param x is number
  */
  numberWithCommas(x: number | undefined): string {

    if (!x) {
      return '0';
    }
    return numberCommasToString(x);
  }

  /**
   * click card
   * @param t type
   */
  onClickCard(t: string): void {
    this.type = t;
    this.switch.emit(t);
    this.getChartData();
  }

  /**
   * deal with data for donut chart 
   */
  getChartData(): void {
    if (!this.data) {
      return;
    }
    const dt = this.type === 'spend' ? this.data['spend'] : this.data['income'];

    if (!dt) {
      return;
    }

    this.dataChart = _.clone(dt.map((t) => {
      return {
        category: t[`category`],
        percent: t[`percent`],
        amount: t[`amount`]
      };
    }));
  }

} 

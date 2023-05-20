import { Component, Input, Output, EventEmitter } from '@angular/core';
import { numberCommasToString } from '../../../utils/number.util';
import { ITransactions } from '../../../models/transactions';
import { IChartDonutItem } from '../../../models/chart-donut';
import * as _ from 'lodash';


@Component({
  selector: 'app-slide-single-btn',
  templateUrl: 'slide-single-btn.component.html',
  styleUrls: ['slide-single-btn.component.scss'],
})
export class SlideSingleBtnComponent {
  @Input() total?: number = 0;
  @Input() type?: string;
  @Output() clickCard: EventEmitter<undefined> = new EventEmitter<undefined>();

  constructor(
  ) {
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
   */
  onType(): void { 
    this.clickCard.emit();
  }


  /**
   * get icon class name
   * */
  getIcon(): string {
    var name = '';
    if (this.type === 'spend') {
      name = 'cart';
    } else if (this.type === 'income') {
      name = 'money-white';
    }
    return 'icon-' + name;
  }
   
} 

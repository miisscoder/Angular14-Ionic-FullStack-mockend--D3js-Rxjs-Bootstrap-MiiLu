import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDashboardDetailItem } from '../../../models/dashboard';
import { numberCommasToString, getNumber } from '../../../utils/number.util';

@Component({
  selector: 'app-card-4',
  templateUrl: 'card-4.component.html',
  styleUrls: ['card-4.component.scss'],
})
export class Card4Component {
  @Input() data?: IDashboardDetailItem;


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
    * '100%' => 100
    */
  getNumber(percentage: string | undefined): number {
    if (!percentage) {
      return 0;
    }
    return getNumber(percentage);
  }
} 

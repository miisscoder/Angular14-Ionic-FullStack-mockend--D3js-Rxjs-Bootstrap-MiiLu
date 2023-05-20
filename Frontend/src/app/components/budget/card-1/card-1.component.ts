import { Component, Input } from '@angular/core';
import { IBudgetIncome } from '../../../models/budget';
import { numberCommasToString } from '../../../utils/number.util';

@Component({
  selector: 'app-card-1',
  templateUrl: 'card-1.component.html',
  styleUrls: ['card-1.component.scss'],
})
export class Card1Component {
  @Input() data?: IBudgetIncome;

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


} 

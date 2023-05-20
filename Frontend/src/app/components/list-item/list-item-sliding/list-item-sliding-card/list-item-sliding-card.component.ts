import { Component, Input, Output, EventEmitter } from '@angular/core';
import { numberCommasToString } from '../../../../utils/number.util';
import { getIconName } from '../../../../utils/common.util';
import { IGoalItem } from '../../../../models/goal';

@Component({
  selector: 'app-list-item-sliding-card',
  templateUrl: 'list-item-sliding-card.component.html',
  styleUrls: ['list-item-sliding-card.component.scss'],
})
export class ListItemSlidingCardComponent {
  @Input() data?: IGoalItem;

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
   * 'Rent & Utilities' => 'rent-utilities' 
   * @param type
   */
  getIconName(type: string | undefined): string {
    if (!type) {
      return '';
    }
    return getIconName(type);
  }


  /**
   * progress
   * @param amount
   * @param goal
   */
  getProgressBarWidthPercentage(amount: number | undefined, goal: number | undefined) {
    if (!amount || !goal) {
      return '0';
    }
    return amount / goal > 1 ? '100%' : Math.floor(amount / goal * 100) + '%';
  }


  /**
   * calculate percentage
   * @param amount
   * @param goal
   */
  getPercentage(amount: number | undefined, goal: number | undefined): string {
    if (!amount || !goal) {
      return '0';
    }
    return Math.floor(amount / goal * 100) + '%';
  }
}

import { Component, Input } from '@angular/core';
import { IBudgetDetailItem } from '../../../../models/budget'; 
import { numberCommasToString, getNumber, getInteger } from '../../../../utils/number.util';
import { getIconClass, getIconName } from '../../../../utils/common.util';

@Component({
  selector: 'app-card-2-item',
  templateUrl: 'card-2-item.component.html',
  styleUrls: ['card-2-item.component.scss'],
})
export class Card2ItemComponent {
  @Input() data?: IBudgetDetailItem[] 
  @Input() expand = false;

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
   * 'Rent & Utilities' => 'rent-&-utilities'
   * @param type 
   */
  getIconClass(item: string): string {
    return getIconClass(item);
  }

  /**
   * 'Rent & Utilities' => 'rent-utilities' 
   * @param type
   */
  getIconName(type: string): string {
    return getIconName(type);
  }

  /**
   *  '100%' => 100
   * */
  getNumber(percentage: string): number {
    return getNumber(percentage);
  }

  /**
   *  100.2 => 100
   * */
  getInteger(number: number): number {
    return getInteger(number);
  }

   
}

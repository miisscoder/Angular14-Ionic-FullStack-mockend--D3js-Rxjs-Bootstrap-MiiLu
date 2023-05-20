import { Component, Input } from '@angular/core';
import { ITransactions } from '../../../models/transactions';
import { getIconName } from '../../../utils/common.util';

@Component({
  selector: 'app-slide-2-list',
  templateUrl: 'slide-2-list.component.html',
  styleUrls: ['slide-2-list.component.scss'],
})
export class Slide2ListComponent {
  @Input() data?: ITransactions;

  constructor(
  ) {
  }


  /**
  * 'Rent & Utilities' => 'rent-utilities'
  * @param type 
  */
  getIconName(item: string | undefined): string {
    if (!item) {
      return '';
    }
    return getIconName(item);
  }
  /**
   * get color according to category
   * @param category
   */
  getColor(category: string | undefined): string {
    if (!category) {
      return '';
    }
    return 'other income' === category.toLocaleLowerCase() ||
      'income' === category.toLocaleLowerCase() ? '#0099cc' : '#ff6633';
  }
}



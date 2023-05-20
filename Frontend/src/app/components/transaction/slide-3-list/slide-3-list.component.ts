import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IIncomeSpendDataItem } from '../../../models/incomeSpend'; 
import { getIconName } from '../../../utils/common.util';

@Component({
  selector: 'app-slide-3-list',
  templateUrl: 'slide-3-list.component.html',
  styleUrls: ['slide-3-list.component.scss'],
})
export class Slide3ListComponent {
  @Input() data?: IIncomeSpendDataItem[];

  constructor(
  ) {
  }


  /**
  * 'Rent & Utilities' => 'rent-utilities'
  * @param type 
  */
  getIconName(item: string): string {
    return getIconName(item);
  }
} 

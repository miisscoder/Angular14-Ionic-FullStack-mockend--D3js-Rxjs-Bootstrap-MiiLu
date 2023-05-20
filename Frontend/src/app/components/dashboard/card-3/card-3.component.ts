import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDashboardDetailItem } from '../../../models/dashboard';
import { getNumber } from '../../../utils/number.util';

@Component({
  selector: 'app-card-3',
  templateUrl: 'card-3.component.html',
  styleUrls: ['card-3.component.scss'],
})
export class Card3Component {
  @Input() data?: IDashboardDetailItem;


  constructor(
  ) {
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

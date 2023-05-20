import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITransactionIncomeSpendDetailItem } from '../../../../models/transactions';
import { getIconName } from '../../../../utils/common.util';


@Component({
  selector: 'app-slide-1-modal-item',
  templateUrl: 'slide-1-modal-item.component.html',
  styleUrls: ['slide-1-modal-item.component.scss'],
})
export class Slide1ModalItemComponent {
  @Input() data?: ITransactionIncomeSpendDetailItem[]; 

  constructor(
  ) {
  }

 
} 

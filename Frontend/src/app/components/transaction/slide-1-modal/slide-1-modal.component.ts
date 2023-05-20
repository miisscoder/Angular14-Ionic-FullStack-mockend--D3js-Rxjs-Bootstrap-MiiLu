import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITransactionIncomeSpendItem } from '../../../models/transactions';
import { getIconName } from '../../../utils/common.util';


@Component({
  selector: 'app-slide-1-modal',
  templateUrl: 'slide-1-modal.component.html',
  styleUrls: ['slide-1-modal.component.scss'],
})
export class Slide1ModalComponent {
  @Input() data?: ITransactionIncomeSpendItem;
  @Output() close: EventEmitter<undefined> = new EventEmitter<undefined>();

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
   * hide menu modal
   * */
  slideMenuHide() {
    this.close.emit();
  }
} 

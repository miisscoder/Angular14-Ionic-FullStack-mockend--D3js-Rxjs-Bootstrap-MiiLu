import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDashboardDetailItem } from '../../../models/dashboard';
import { getIconClass } from '../../../utils/common.util';


@Component({
  selector: 'app-modal-transaction',
  templateUrl: 'modal-transaction.component.html',
  styleUrls: ['modal-transaction.component.scss'],
})
export class ModalTransactionComponent {
  @Input() data?: IDashboardDetailItem;
  @Output() hide: EventEmitter<undefined> = new EventEmitter<undefined>();
  width: number = 0;

  constructor(
  ) {
    this.width = window.innerWidth;
  }

  /**
  * 'Rent & Utilities' => 'rent-&-utilities'
  * @param type 
  */
  getIconClass(item: string): string {
    return getIconClass(item);
  }

  /** hide modal */
  onHideModal(): void {
    this.hide.emit();
  }
} 

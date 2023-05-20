import { Component, Input, Output, EventEmitter } from '@angular/core';
import { numberCommasToString } from '../../../utils/number.util'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-2-btns',
  templateUrl: 'slide-2-btns.component.html',
  styleUrls: ['slide-2-btns.component.scss'],
})
export class Slide2BtnsComponent {
  @Input() totalSpend?: number | undefined = 0;
  @Input() totalIncome?: number | undefined = 0;
  @Output() switch: EventEmitter<string> = new EventEmitter<string>();
  type: string = 'spend'; 

  constructor(
    private router: Router
  ) {
  }

  /**
   * 1000.00 => '1,000.00'
   * @param x is number
   */
  numberWithCommas(x: number | undefined): string {
    if (!x) {
      return '';
    }
    return numberCommasToString(x);
  }

  onClick(url: string): void {
    this.router.navigateByUrl(url);
  }


} 

import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IBudgetGrowth } from '../../../models/budget';
import { numberCommasToString } from '../../../utils/number.util';
import * as _ from 'lodash';

@Component({
  selector: 'app-card-3',
  templateUrl: 'card-3.component.html',
  styleUrls: ['card-3.component.scss'],
})
export class Card3Component implements OnInit, OnChanges {
  @Input() data?: IBudgetGrowth;
  @Input() title?: string;
  widthC = 0;
  heightC = 0;

  constructor(
  ) {
  }

  ngOnInit() {
    if (!this.data) {
      return;
    }
    this.init();
  }

  ngOnChanges() {
    if (!this.data) {
      return;
    }
    this.init();
  }

  init() {
    this.heightC = 0.25 * window.innerHeight;
    this.widthC = window.innerWidth - 16 - 16;
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

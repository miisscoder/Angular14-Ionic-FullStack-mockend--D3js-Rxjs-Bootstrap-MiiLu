import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BarChartComponent } from './bar-chart.component';

@NgModule({
  declarations: [BarChartComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BarChartComponent
  ]
})
export class BarChartModule { }

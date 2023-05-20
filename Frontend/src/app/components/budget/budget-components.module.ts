import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Card1Component } from './card-1/card-1.component';
import { Card2Component } from './card-2/card-2.component';
import { Card2ItemComponent } from './card-2/card-2-item/card-2-item.component';
import { Card3Component } from './card-3/card-3.component';


import { TimeLineChartModule } from '../charts/time-line-chart/time-line-chart.module';

@NgModule({
  declarations: [Card1Component, Card2Component, Card2ItemComponent, Card3Component],
  imports: [
    CommonModule,
    IonicModule,
    TimeLineChartModule
  ],
  exports: [
    Card1Component,
    Card2Component,
    Card2ItemComponent,
    Card3Component
  ]
})
export class BudgetComponentsModule { }

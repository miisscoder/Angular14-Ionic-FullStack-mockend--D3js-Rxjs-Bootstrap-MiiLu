import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Slide1BtnsComponent } from './slide-1-btns/slide-1-btns.component';
import { Slide1ListComponent } from './slide-1-list/slide-1-list.component';
import { Slide1ModalComponent } from './slide-1-modal/slide-1-modal.component';
import { Slide1ModalItemComponent } from './slide-1-modal/slide-1-modal-item/slide-1-modal-item.component';
import { Slide2BtnsComponent } from './slide-2-btns/slide-2-btns.component';
import { Slide2ListComponent } from './slide-2-list/slide-2-list.component';
import { DonutChartModule } from '../charts/donut-chart/donut-chart.module';
import { SlideSingleBtnComponent } from './slide-single-btn/slide-single-btn.component';
import { Slide3ListComponent } from './slide-3-list/slide-3-list.component';
import { Slide4ChartItemsComponent } from './slide-4-chart-items/slide-4-chart-items.component';
import { IncomeSpendComponent } from './income-spend/income-spend.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';


import { TopNavModule } from '../top-nav/top-nav.module';
import { PageTitleModule } from '../page-title/page-title.module';
import { BarChartModule } from '../charts/bar-chart/bar-chart.module';

@NgModule({
  declarations: [
    Slide1BtnsComponent,
    Slide1ListComponent,
    Slide1ModalComponent,
    Slide1ModalItemComponent,
    Slide2BtnsComponent,
    Slide2ListComponent,
    SlideSingleBtnComponent,
    Slide3ListComponent,
    Slide4ChartItemsComponent,
    IncomeSpendComponent,
    CalendarComponent,
    CalendarDetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    DonutChartModule,
    TopNavModule,
    PageTitleModule,
    BarChartModule
  ],
  exports: [
    Slide1BtnsComponent,
    Slide1ListComponent,
    Slide1ModalComponent,
    Slide2BtnsComponent,
    Slide2ListComponent,
    SlideSingleBtnComponent,
    Slide3ListComponent,
    Slide4ChartItemsComponent,
    IncomeSpendComponent,
    CalendarComponent,
    CalendarDetailComponent
  ]
})
export class TransactionComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


import { TopNavModule } from '../../components/top-nav/top-nav.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { TransactionComponentsModule } from '../../components/transaction/transaction-components.module';

import { TransactionPage } from './transaction.page';
import { FilterPage } from './filter/filter.page';
import { IncomePage } from './income/income.page';
import { SpendPage } from './spend/spend.page';
import { CalendarPage } from './calendar/calendar.page';

import { ListItemDropdownModule } from '../../components/list-item/list-item-dropdown/list-item-dropdown.module';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionPage
      },
      {
        path: 'filter',
        component: FilterPage
      },
      {
          path: 'income',
          component: IncomePage
      },
      {
          path: 'spend',
          component: SpendPage
      },
      {
          path: 'calendar',
          component: CalendarPage
      }
    ]),
    TopNavModule,
    PageTitleModule,
    TransactionComponentsModule,
    ListItemDropdownModule, 
  ],
  declarations: [
    TransactionPage,
    FilterPage,
    IncomePage,
    SpendPage, 
    CalendarPage,
  ]
})
export class TransactionPageModule {

}

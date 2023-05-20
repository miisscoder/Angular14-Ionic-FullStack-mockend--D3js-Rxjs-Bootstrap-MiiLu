import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 

import { BudgetPage } from './budget.page';
import { SetAlertPage } from './set-alert/set-alert.page';

import { TopNavModule } from '../../components/top-nav/top-nav.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { BudgetComponentsModule } from '../../components/budget/budget-components.module';
import { ListItemDropdownModule } from '../../components/list-item/list-item-dropdown/list-item-dropdown.module';
import { ListItemSliderModule } from '../../components/list-item/list-item-slider/list-item-slider.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule, 
        RouterModule.forChild([{
            path: '',
            component: BudgetPage
        }, {
            path: 'alert',
            component: SetAlertPage
        }
        ]),
        TopNavModule,
        PageTitleModule,
        BudgetComponentsModule,
        ListItemDropdownModule,
        ListItemSliderModule
    ],
    declarations: [BudgetPage, SetAlertPage]
})
export class BudgetPageModule {
}

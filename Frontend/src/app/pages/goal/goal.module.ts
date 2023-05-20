import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 

import { GoalPage } from './goal.page';
import { SetGoalPage } from './set-goal/set-goal.page';

import { TopNavModule } from '../../components/top-nav/top-nav.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
 
import { ListItemSlidingModule } from '../../components/list-item/list-item-sliding/list-item-sliding.module';
import { ListItemTextModule } from '../../components/list-item/list-item-text/list-item-text.module';
import { ListItemDropdownModule } from '../../components/list-item/list-item-dropdown/list-item-dropdown.module';
import { ListItemTextAmountModule } from '../../components/list-item/list-item-text-amount/list-item-text-amount.module';
import { ListItemDatePickerModule } from '../../components/list-item/list-item-date-picker/list-item-date-picker.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
        TopNavModule,
        ListItemSlidingModule,
        ListItemTextModule,
        ListItemDropdownModule,
        ListItemTextAmountModule,
        ListItemDatePickerModule,
        PageTitleModule,
        RouterModule.forChild([{
            path: '',
            component: GoalPage
        }, {
            path: 'set',
            component: SetGoalPage
        }
        ])
    ],
    declarations: [GoalPage, SetGoalPage]
})
export class GoalPageModule {
}

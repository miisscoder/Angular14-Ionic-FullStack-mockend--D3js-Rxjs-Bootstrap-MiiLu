import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


import { TopNavModule } from '../../components/top-nav/top-nav.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { DashboardComponentsModule } from '../../components/dashboard/dashboard-components.module';

import { DashboardPage } from './dashboard.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{
            path: '',
            component: DashboardPage
        }
        ]),
        TopNavModule,
        PageTitleModule,
        DashboardComponentsModule
    ],
    declarations: [DashboardPage]
})
export class DashboardPageModule {
}

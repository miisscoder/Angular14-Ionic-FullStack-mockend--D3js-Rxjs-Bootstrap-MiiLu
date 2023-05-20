import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
  
import { TimeLineChartComponent } from './time-line-chart.component'; 
 
@NgModule({
    declarations: [TimeLineChartComponent],
    imports: [  
        CommonModule, 
        IonicModule
    ],
    exports: [
        TimeLineChartComponent
    ]
})
export class TimeLineChartModule { }

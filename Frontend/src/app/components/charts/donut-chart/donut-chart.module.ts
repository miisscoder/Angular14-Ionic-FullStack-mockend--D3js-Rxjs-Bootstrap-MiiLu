import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
  
import { DonutChartComponent } from './donut-chart.component'; 
 
@NgModule({
    declarations: [DonutChartComponent],
    imports: [  
        CommonModule, 
        IonicModule
    ],
    exports: [
        DonutChartComponent
    ]
})
export class DonutChartModule { }

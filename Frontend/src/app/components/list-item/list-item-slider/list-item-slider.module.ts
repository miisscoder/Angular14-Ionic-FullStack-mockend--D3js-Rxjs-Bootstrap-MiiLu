import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
  
import { ListItemSliderComponent } from './list-item-slider.component'; 
 
@NgModule({
    declarations: [ListItemSliderComponent],
    imports: [  
        CommonModule, IonicModule
    ],
    exports: [
        ListItemSliderComponent,
    ]
})
export class ListItemSliderModule { }
 
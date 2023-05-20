import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 
  
import { ListItemDatePickerComponent } from './list-item-date-picker.component'; 
 
@NgModule({
    declarations: [ListItemDatePickerComponent],
    imports: [  
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
        RouterModule
    ],
    exports: [
        ListItemDatePickerComponent,
    ]
})

export class ListItemDatePickerModule { }
 
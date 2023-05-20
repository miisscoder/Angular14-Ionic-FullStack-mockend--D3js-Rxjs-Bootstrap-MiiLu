import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 
  
import { ListItemTextAmountComponent } from './list-item-text-amount.component'; 
 
@NgModule({
    declarations: [ListItemTextAmountComponent],
    imports: [  
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
        RouterModule
    ],
    exports: [
        ListItemTextAmountComponent,
    ]
})

export class ListItemTextAmountModule { }
 
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
  
import { ListItemDropdownComponent } from './list-item-dropdown.component'; 
 
@NgModule({
    declarations: [ListItemDropdownComponent],
    imports: [  
        CommonModule, IonicModule
    ],
    exports: [
        ListItemDropdownComponent,
    ]
})
export class ListItemDropdownModule { }
 
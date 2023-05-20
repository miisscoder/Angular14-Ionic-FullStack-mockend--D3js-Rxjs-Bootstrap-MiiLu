import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 
  
import { ListItemTextComponent } from './list-item-text.component'; 
 
@NgModule({
    declarations: [ListItemTextComponent],
    imports: [  
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
        RouterModule
    ],
    exports: [
        ListItemTextComponent,
    ]
})
export class ListItemTextModule { }
 
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular'; 
import { TopNavComponent } from './top-nav.component'; 


@NgModule({
    declarations: [TopNavComponent],
    imports: [ 
        IonicModule.forRoot(),  
        CommonModule, 
        RouterModule
    ],
    exports: [
        TopNavComponent,
    ]
})
export class TopNavModule { }

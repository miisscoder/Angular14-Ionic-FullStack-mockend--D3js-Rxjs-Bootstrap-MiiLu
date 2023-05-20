import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
  
import { CardSlidesComponent } from './card-slides/card-slides.component';
import { Card1Component } from './card-1/card-1.component';
import { Card2Component } from './card-2/card-2.component';
import { Card3Component } from './card-3/card-3.component';
import { Card4Component } from './card-4/card-4.component';
import { Card5Component } from './card-5/card-5.component';
import { ModalTransactionComponent } from './modal-transaction/modal-transaction.component'; 

 
 
@NgModule({
    declarations: [CardSlidesComponent,
        Card1Component,
        Card2Component,
        Card3Component,
        Card4Component,
        Card5Component,
        ModalTransactionComponent
    ],
    imports: [  
        CommonModule, 
        IonicModule, 
    ],
    exports: [
        CardSlidesComponent, 
        Card1Component,
        Card2Component,
        Card3Component,
        Card4Component,
        Card5Component,
        ModalTransactionComponent
    ]
})
export class DashboardComponentsModule { }

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDashboardDetailItem } from '../../../models/dashboard'; 
 
@Component({
    selector: 'app-card-2',
    templateUrl: 'card-2.component.html',
    styleUrls: ['card-2.component.scss'],
})
export class Card2Component {
    @Input() data?: IDashboardDetailItem;
    @Output() modal: EventEmitter<undefined> = new EventEmitter<undefined>();
     
     
    constructor( 
    ) { 
    }
     

    /**
      * modal down
      */
    modalShow(): void {
        this.modal.emit();
    }

     
} 

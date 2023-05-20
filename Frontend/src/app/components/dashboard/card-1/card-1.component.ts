import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDashboardDetailItem } from '../../../models/dashboard';
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-card-1',
    templateUrl: 'card-1.component.html',
    styleUrls: ['card-1.component.scss'],
})
export class Card1Component {
    @Input() data?: IDashboardDetailItem;  
    @Output() change: EventEmitter<number> = new EventEmitter<number>();
     
    constructor(
        private router: Router
    ) { 
    }
     

    goToTransaction() {
        this.router.navigateByUrl('/transaction');
    }
     
} 

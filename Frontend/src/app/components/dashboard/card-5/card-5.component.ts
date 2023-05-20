import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDashboardDetailItem } from '../../../models/dashboard';

@Component({
    selector: 'app-card-5',
    templateUrl: 'card-5.component.html',
    styleUrls: ['card-5.component.scss'],
})
export class Card5Component {
    @Input() data?: IDashboardDetailItem; 

    constructor(
    ) {
    } 

} 

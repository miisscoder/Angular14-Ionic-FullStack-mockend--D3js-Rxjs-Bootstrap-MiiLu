import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDashboardCardItem } from '../../../models/dashboard'; 
 
@Component({
    selector: 'app-card-slides',
    templateUrl: 'card-slides.component.html',
    styleUrls: ['card-slides.component.scss'],
})
export class CardSlidesComponent {
    @Input() data?: IDashboardCardItem[]; 
    @Input() activeCard: number = 3;
    @Output() change: EventEmitter<number> = new EventEmitter<number>();

    slideOpts = {
        initialSlide: 0,
        speed: 400,
        slidesPerView: 2
    };

     
    constructor( 
    ) { 
    }
     

    /**
      * slide change
      */
    onChangeCardSlides(i: number): void {
        this.change.emit(i);
    }

     
} 

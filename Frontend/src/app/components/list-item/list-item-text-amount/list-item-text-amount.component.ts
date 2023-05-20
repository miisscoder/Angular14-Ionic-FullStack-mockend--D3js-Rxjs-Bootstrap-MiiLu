import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
    selector: 'app-list-item-text-amount',
    templateUrl: 'list-item-text-amount.component.html',
    styleUrls: ['list-item-text-amount.component.scss'],
})
export class ListItemTextAmountComponent {
    @Input() data: string = '';
    @Input() title = '';
    @Output() change = new EventEmitter<string>();

    constructor(
    ) {
    }

    onChange(event: any): void {
      this.change.emit(event as string); 
    }
     
}

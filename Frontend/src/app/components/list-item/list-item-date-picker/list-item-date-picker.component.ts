import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
    selector: 'app-list-item-date-picker',
    templateUrl: 'list-item-date-picker.component.html',
    styleUrls: ['list-item-date-picker.component.scss'],
})
export class ListItemDatePickerComponent {
    @Input() data = '' ;
    @Input() title = '';
    @Output() change = new EventEmitter<string>();

    constructor(
    ) {
    }

    onChange(event: string): void {
        this.change.emit(event); 
    }
     
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-list-item-dropdown',
    templateUrl: 'list-item-dropdown.component.html',
    styleUrls: ['list-item-dropdown.component.scss'],
})
export class ListItemDropdownComponent {
    @Input() disabled = false;
    @Input() title: string = '';
    @Input() options: string[] = [];
    @Input() selected: string  = '';
    @Input() expand = false;

    @Output() select = new EventEmitter<number>();

    constructor(
    ) {
    }

  onSelect(i: number): void {
    this.selected = this.options[i as any];
    this.select.emit(i);
    }
}

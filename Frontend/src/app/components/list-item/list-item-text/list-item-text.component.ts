import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item-text',
  templateUrl: 'list-item-text.component.html',
  styleUrls: ['list-item-text.component.scss'],
})
export class ListItemTextComponent {
  @Input() data: string = '';
  @Input() title = '';
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor(
  ) {
  }

  onChange(event: any): void {
    this.change.emit(event as string);
  }

}

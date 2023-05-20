import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item-slider',
  templateUrl: 'list-item-slider.component.html',
  styleUrls: ['list-item-slider.component.scss'],
})
export class ListItemSliderComponent {
  @Output() change: EventEmitter<number> = new EventEmitter();

  @Input() sliderValue: number = 50;

  constructor(
  ) {
  }
  /**
   * 
   * @param event
   */
  onChange(event: any): void {
    if (!event || !event.detail || !event.detail.value) {
      return;
    }
    this.sliderValue = event ?.detail ?.value;
    this.change.emit(this.sliderValue);
  }

} 

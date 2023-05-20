import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { getIconName } from '../../../utils/common.util';

@Component({
  selector: 'app-slide-4-chart-items',
  templateUrl: 'slide-4-chart-items.component.html',
  styleUrls: ['slide-4-chart-items.component.scss'],
})
export class Slide4ChartItemsComponent {
    @Input() data?: string[]; 
    @Output() clickItem: EventEmitter<string> = new EventEmitter<string>();

    constructor( 
    ) {
    }
    

    /**
     * click item
     * @param category
     */
    onClick(category: string): void {
      this.clickItem.emit(category); 
    }

  /**
* 'Rent & Utilities' => 'rent-utilities'
* @param type 
*/
  getIconName(item: string): string { 
    return getIconName(item);
  }
} 

import { Component, OnInit, Input } from '@angular/core';
import { ICalendarDayDataItem } from 'src/app/models/calendar';
import { getIconName } from 'src/app/utils/common.util';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: 'calendar-detail.component.html',
  styleUrls: ['calendar-detail.component.scss'],
})
export class CalendarDetailComponent implements OnInit {

  @Input() details: ICalendarDayDataItem[] = [];
  
  ngOnInit() { 
  }

  /**
* 'Rent & Utilities' => 'rent-utilities'
* @param type 
*/
  getIconClass(item: string): string {
    return getIconName(item);
  }

}

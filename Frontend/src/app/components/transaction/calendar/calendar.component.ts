import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import * as _ from 'lodash'; 
import {  ICalendarDayDataItem, ICalendarMonthData, ICalendarDayData } from 'src/app/models/calendar';

@Component({
  selector: 'app-calendar-widget',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  @Input() monthData: ICalendarMonthData[] = [];
  @Input() slideShow = 0; 
  @Output() selectedMonthDataEmiter = new EventEmitter<ICalendarDayDataItem[]>;
   
  details: ICalendarDayDataItem[] = [];
  selectedMonthData?: ICalendarMonthData;
  selectedDayData?: ICalendarDayData; 

  // days in every month
  month = [31, 30, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31];
   

  constructor() { 
  }

  ngOnInit() {
    if (!this.monthData) {
      return;
    } 
  }
 

  /**
   * get total
   * @param strs
   */
  getAmountSum(strs: any[]) {
    return _.sumBy(strs, 'amount');
  }

    /**
   * pop detail
   * @param data
   * @param i
   * @param id
   */
  popDayDetail(data: ICalendarDayData, i: number, id: number) {
    if (this.getAmountSum(data['income']) === 0
      && this.getAmountSum(data['spend']) === 0) {
      return;
    }  
    this.selectedMonthData = _.clone(this.monthData[i]);
    this.selectedMonthData['days'] =
      this.selectedMonthData['days'].slice(Math.floor(id / 7) * 7,
        this.selectedMonthData['days'].length <= (Math.floor(id / 7) + 1) * 7 ?
          this.selectedMonthData['days'].length : (Math.floor(id / 7) + 1) * 7);
    this.details = _.union(data['income'], data['spend']);
    this.selectedDayData = data;
    this.selectedMonthDataEmiter.emit(this.details);
  }


}

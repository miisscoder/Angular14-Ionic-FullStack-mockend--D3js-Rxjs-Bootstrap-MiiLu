import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import * as moment from 'moment';
import * as _ from 'lodash';


import { numberCommasToString, getNumber} from 'src/app/utils/number.util';
import { ICalendar, ICalendarDayDataItem, ICalendarMonthData, ICalendarDayData } from 'src/app/models/calendar';
import { finalize } from 'rxjs/operators';
import { CalendarApiService } from 'src/app/services/api/calendar-api.service';
import { CalendarService } from 'src/app/services/subject/calendar.service';
import { ToastService, ToastType } from 'src/app/components/toast/service/toast.service';
import { SubscriptionService } from 'src/app/services/common/subscription.service'; 

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  // loading state
  loading = false;

  width = 0;
  height = 0;

  data?: ICalendar;
  items = [];

  monthData: ICalendarMonthData[] = [];
  details: ICalendarDayDataItem[] = [];
  selectedMonthData?: ICalendarMonthData;
  selectedDayData?: ICalendarDayData; 

  slideHeight = 0;
  slideShow = 0;
  @ViewChild('sliding', { read: ElementRef }) sliding: ElementRef = {} as ElementRef;

  // days in every month
  month = [31, 30, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31];

  constructor(
    private subscriptionService: SubscriptionService,
    private toastService: ToastService,
    private calendarApiService: CalendarApiService,
    private calendarService: CalendarService,
    private _location: Location) {
  }

  ngOnInit() {

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this._getCalendarData();
  }


  /**
    * get calendar data
    */
  private _getCalendarData(): void {
    const sub = this.calendarApiService.getCalendar()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res: ICalendar): void => {
          console.log(res);
          if (!res) { return; }
          this._onCalendarLoaded(res);
        },
        error: e => {
          this.toastService.open({
            type: ToastType.error,
            message: e.message,
          });
        },
      });

    this.subscriptionService.store('_getCalendarData', sub);
    this.loading = true;
  }

  /**
    * handle calendar data loaded
    * @param res calendar data
    */
  private _onCalendarLoaded(res: ICalendar): void {
    this.data = res;
    this.monthData = this.data['monthData'];
    this.initMonthData();
    this.calendarService.calendar = res;
  }



  /**
   * init
   * */
  initMonthData() {
    _.each(this.monthData, (o, ii) => {
      let weekday = Number(moment(o['month'] + ' 1 ' + o['year'],
        'MMMM D YYYY').format('E'));
      if (7 === weekday) {
        weekday = 0;
      }
      const d: ICalendarDayData[] = [];
      while (weekday-- > 0) {
        d.push({
          'date': -1,
          'income': [],
          'spend': []
        });
      }
      const days = this.getMonthDays(o['month'], o['year']);
      let i = 1;
      while (i <= days) {
        const f = _.find(o['days'], oo => oo['date'] === i);
        d.push({
          'date': i,
          'income': f ? f['income'] : [],
          'spend': f ? f['spend'] : []
        });
        i++;
      }
      this.monthData[ii as any]['days'] = d;
    });
  }

  /**
   * get total
   * @param strs
   */
  getAmountSum(strs: any[]) {
    return _.sumBy(strs, 'amount');
  }

  /**
   * go to last page
   * */
  onBack() {
    this._location.back();
  }

  // 
  /**
   * str - 'november'
   * @param month
   * @param year
   */
  getMonthDays(month: any, year: any) {
    const m = Number(moment(month, 'MMMM').format('M'));

    return this.beLeapYear(year) && 2 === m ?
      this.month[m - 1] + 1 : this.month[m - 1];
  }

  /**
   * if is leap year
   * @param year
   */
  beLeapYear(year: any): boolean {
    year = Number(year);
    if (!year) {
      return false;
    }

    return year % 100 === 0 ? (year % 400 === 0 ? true : false) :
      (year % 4 === 0 ? true : false);
  }

  /**
   * show slide menu
   * */
  slideMenuShow() {
    this.slideShow = 1;
    const __ = this;
    setTimeout(function (o) {
      if (!__.sliding) {
        return;
      }
      __.slideHeight = __.sliding.nativeElement.offsetHeight;
      __.sliding.nativeElement.style.top =
        (__.height - __.slideHeight) + 'px';
    }, 300);
  }


  /**
   * hide slide menu
   * */
  slideMenuHide() {
    if (!this.sliding) {
      return;
    }
    this.sliding.nativeElement.style.top = '100%';
    this.slideShow = 0;
  }

  /**
   * pop detail
   * @param data
   * @param i
   * @param id
   */
  popDayDetail(data: ICalendarDayDataItem[] ) {  
    this.sliding.nativeElement.style.top = '6.7rem';
    this.slideShow = 1; 
    this.details = data;
  }



  /**
   *  '100%' => 100
   * */
  getNumber(percentage: string): number {
    return getNumber(percentage);
  }


  /**
   * 1000.00 => '1,000.00'
   * @param x is number
   */
  numberWithCommas(x: number | undefined): string {
    if (!x) {
      return '0';
    }
    return numberCommasToString(x);
  }

 



}

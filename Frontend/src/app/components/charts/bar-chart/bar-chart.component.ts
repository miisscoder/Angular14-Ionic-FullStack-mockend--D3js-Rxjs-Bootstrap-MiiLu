import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import { IIncomeSpendDiaryItem } from 'src/app/models/incomeSpend'; 

@Component({
  selector: 'app-bar-chart',
  templateUrl: 'bar-chart.component.html',
  styleUrls: ['bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, OnChanges {

  @Input() diaryData: IIncomeSpendDiaryItem[] = [];
  // the chart width and height
  @Input() width = 0;
  @Input() height = 0;
  chartData: any[]  = [];



  color = [{
    'category': 'Rent & Utilities',
    'color': '#08a5e1'
  }, {
    'category': 'Travel',
    'color': '#ffa700'
  }, {
    'category': 'Food',
    'color': '#ff5a5a'
  }, {
    'category': 'Shopping',
    'color': '#bc43d3'
  }, {
    'category': 'Tax',
    'color': '#47c684'
  }, {
    'category': 'Income',
    'color': '#08a5e1'
  }, {
    'category': 'Other Income',
    'color': '#ffa700'
  }];
   

  constructor() {
  }

  ngOnInit() {  
    this.dealWithData();
    this.drawChart();

  }

  ngOnChanges() { 
    this.dealWithData();
    this.drawChart();
  }


  dealWithData() {
    const __ = this;
    this.chartData = [];
    const categories = _.map(this.color, 'category');
    _.each(this.diaryData, (o, i) => {
      let start = 0;
      let detail: any[] = [];

      for (let ii = 0; ii < categories.length; ii++) {
        const oo = _.find(o['details'],
          (item: any) => item['category'] === categories[ii]);
        if (oo && oo['amount'] !== 0) {
          detail.push({
            'date': o['date'],
            'category': oo['category'],
            'amount': oo['amount'],
            'start': start,
            'end': start + oo['amount'],
            'position': 'middle'
          });
          start += oo['amount'];
        }
      }
      if (detail.length > 0) {
        detail[0]['position'] = 'bottom';
        detail[detail.length - 1]['position'] = 'top';
      }
      this.chartData.push(detail);
    });
  }

  drawChart() {
    const __ = this; 
    if (this.height < 0 || this.width < 0) {
      return;
    }
    const margin = ({ top: 40, right: 16, bottom: 80, left: 16 });
    const textSize = 12;
    const textPaddiing = 24;
    let sums = [];
    _.each(this.diaryData, (o: any) => {
      sums.push(_.sumBy(o.details, 'amount'));
    });

    sums = this.diaryData.map((d: any) => _.sumBy(d.details, 'amount'));
    const average = _.sum(sums) / sums.length;
    const x = d3.scaleBand()
      .domain(this.diaryData.map((d: any) => d.date))
      .range([margin.left,
      this.width - margin.right])
      .padding(0.3);

    const y = d3.scaleLinear()
      .domain([d3.max(sums) as any, 0])
      .range([margin.top, this.height - margin.bottom]);

    const xAxis = (g: any) => g
      .attr('transform', `translate(0,${this.height - margin.bottom
        + textSize + textPaddiing})`)
      .call(d3.axisBottom(x).tickSizeOuter(0).tickSize(0).tickPadding(20))
      .call((g: any) => g.select('.domain').remove());


    const yAxis = (g: any) => g
      .attr('transform', `translate(${margin.left * 5},${margin.top})`)
      .call(d3.axisLeft(y).tickSizeOuter(0).tickSize(10).tickPadding(15))
      .call((g: any) => g.select('.domain').remove());

    d3.select('#barChart svg')
      .remove();
    const svg = d3.select('#barChart')
      .append('svg')
      .attr('viewBox', `0, 0, ${this.width}, ${this.height}`);
     
    const group = svg
      .selectAll('g')
      .data(this.chartData)
      .join('g');

    group.
      selectAll('path')
      .data(d => d)
      .join('path')
      .attr('fill', (d: any) => {
        const f = _.find(this.color,
          o => o['category'] === d['category']);
        return f ? f['color'] : '#000000';
      })
      .attr('d', (d: any) => {
        if (d.position === 'middle') {
          return 'M' + (x(d.date) as any) + ' ' + ((y(d.end) as any) + margin.top) + ' ' +
            'V ' + (margin.top + (y(d.start) as any)) + ' ' +
            'h' + ' ' + x.bandwidth() + ' ' +
            'V' + ' ' + (margin.top + (y(d.end) as any)) + ' ' +
            'h' + ' ' + (- x.bandwidth()) + ' ' +
            'Z';
        } else if (d.position === 'top') {
          return 'M' + ((x(d.date) as any) + 5) + ' ' + ((y(d.end) as any) + margin.top) + ' ' +
            'Q ' + (x(d.date) as any) + ' ' + ((y(d.end) as any) + margin.top) + ' ' +
            (x(d.date) as any) + ' ' + ((y(d.end) as any) + margin.top + 5) + ' ' +
            'V ' + (margin.top + (y(d.start) as any)) + ' ' +
            'h ' + x.bandwidth() + ' ' +
            'V ' + (margin.top + (y(d.end) as any) + 5) + ' ' +
            'Q ' + ((x(d.date) as any) + x.bandwidth()) + ' ' + ((y(d.end) as any) + margin.top) + ' ' +
            ((x(d.date) as any) + x.bandwidth() - 5) + ' ' + ((y(d.end) as any) + margin.top) + ' ' +
            'Z';
        } else if (d.position === 'bottom') {
          return 'M' + (x(d.date) as any) + ' ' + ((y(d.end) as any) + margin.top) + ' ' +
            'V ' + (margin.top + (y(d.start) as any) - 5) + ' ' +
            'Q ' + (x(d.date) as any) + ' ' + ((y(d.start) as any) + margin.top) + ' ' +
            ((x(d.date) as any) + 5) + ' ' + ((y(d.start) as any) + margin.top) + ' ' +
            'h ' + (x.bandwidth() - 10) + ' ' +
            'Q ' + ((x(d.date) as any) + x.bandwidth()) + ' ' + ((y(d.start) as any) + margin.top) + ' ' +
            ((x(d.date) as any) + x.bandwidth()) + ' ' + ((y(d.start) as any) + margin.top - 5) + ' ' +
            'V ' + ((y(d.end) as any) + margin.top) + ' ' +
            'Z';
        } else {
          return 'M' + ((x(d.date) as any) + 5) + ' ' + (margin.top + (y(d.end) as any)) + ' ' +
            'Q ' + (x(d.date) as any) + ' ' + (margin.top + (y(d.end) as any)) + ' ' +
            (x(d.date) as any) + ' ' + (margin.top + (y(d.end) as any) + 5) + ' ' +
            'V ' + (margin.top + (y(d.start) as any) - 5) + ' ' +
            'Q ' + (x(d.date) as any) + ' ' + (margin.top + (y(d.start) as any)) + ' ' +
            ((x(d.date) as any) + 5) + ' ' + (margin.top + (y(d.start) as any)) + ' ' +
            'h ' + (x.bandwidth() - 10) + ' ' +
            'Q ' + ((x(d.date) as any) + x.bandwidth()) + ' ' + (margin.top + (y(d.start) as any)) + ' ' +
            ((x(d.date) as any) + x.bandwidth()) + ' ' + (margin.top + (y(d.start) as any) - 5) + ' ' +
            'V ' + (margin.top + (y(d.end) as any) + 5) + ' ' +
            'Q ' + ((x(d.date) as any) + x.bandwidth()) + ' ' + (margin.top + (y(d.end) as any)) + ' ' +
            ((x(d.date) as any) + x.bandwidth() - 5) + ' ' + (margin.top + (y(d.end) as any)) + ' ' +
            'Z';
        }
      });

    group
      .append('text')
      .text(d => '$' + _.sumBy(d, 'amount'))
      .attr('text-anchor', 'middle')
      .attr('x', (d: any[]) => d.length > 0 ? x(d[0]['date']) as any + x.bandwidth() / 2 : -200)
      .attr('y', d => (y(_.sumBy(d, 'amount')) as any) + margin.top - 5);

    if ((y(average) as any) + margin.top) {
      // average
      svg.append('path')
        .attr('d', d => 'M ' + margin.left + ' '
          + ((y(average) as any) + margin.top)
          + ' ' + (this.width - 16) + ' '
          + ((y(average) as any) + margin.top))
        .attr('stroke-dasharray', '10,5')
        .attr('stroke', '#cccccc');

      svg.append('text')
        .text('Avg.$' + Math.floor(average))
        .attr('x', this.width - 16)
        .attr('y', (y(sums[sums.length - 1]) as any) >= (y(average) as any) &&
          (y(sums[sums.length - 1]) as any) <= (y(average) as any) + 12 ?
          (y(average) as any) + margin.top + 12 :
          (y(average) as any) + margin.top - 12)
        .attr('text-anchor', 'end');
    }

    svg.append('g')
      .call(xAxis);


  }
}


import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IChartTimeLineItem } from '../../../models/chart-time-line';
import * as d3 from 'd3';
import * as _ from 'lodash';

@Component({
  selector: 'app-time-line-chart',
  templateUrl: 'time-line-chart.component.html',
  styleUrls: ['time-line-chart.component.scss'],
})
export class TimeLineChartComponent implements OnInit, OnChanges {
  @Input() data?: IChartTimeLineItem[];
  @Input() widthC = 0;
  @Input() heightC = 0;

  constructor(
  ) {
  }

  ngOnInit() {
    if (!this.data) {
      return;
    }
    this.onInitChart();
  }

  ngOnChanges() {
    if (!this.data) {
      return;
    }
    this.onInitChart();
  }


  /**
   * init chart
   * */
  onInitChart() {
    if (!this.data) {
      return;
    }
    let ticks: Date[] = [];
    _.forEach(this.data, function (o) {
      ticks.push(new Date(o['date']));
    });
    const margin = ({ top: 20, right: 20, bottom: 20, left: 20 });
    const x = d3.scaleTime()
      .domain(d3.extent(ticks) as any[])
      .range([margin.left, this.widthC - margin.right]);

    const xAxis = (g: any) => g
      .attr('transform', `translate(0,${this.heightC - margin.bottom})`)
      .call(d3.axisBottom(x)
        .tickValues(ticks)
        .tickFormat((d: any): string => ((d.getMonth() + 1) + '/' + d.getDate()) as any)
        .tickSizeOuter(0)
        .tickSizeInner(0));

    const max = d3.max(this.data, (d: IChartTimeLineItem): number => d.percetage);

    const y = d3.scaleLinear()
      .domain([0, max ? max : 0]).nice()
      .range([this.heightC - margin.bottom, margin.top]);


    const line = d3.line()
      .curve(d3.curveCardinal)
      .x((d: any) => {
        const xx = x(new Date(d.date));
        return xx ? xx : 0;
      })
      .y((d: any) => {
        const yy = y(d.percetage);
        return yy ? yy : 0;
      });

    d3.select('#time-line-chart').select('svg').remove();
    const svg = d3.select('#time-line-chart').append('svg')
      .attr('viewBox', `0, 0, ${this.widthC}, ${this.heightC}`);
    const linearGradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', 'grad');
    linearGradient.append('stop')
      .attr('stop-color', '#0ea3dc');
    linearGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#f25745');

    svg.datum(this.data as any[])
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', 'url(#grad)')
      .attr('stroke-width', 1.5)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('d', line);

    const circle = svg.selectAll('circle').data(this.data).enter();

    circle.append('circle')
      .attr('cx', (d: IChartTimeLineItem) => {
        const xx = x(new Date(d.date));
        return xx ? xx : 0;
      })
      .attr('cy', (d: IChartTimeLineItem) => {
        const yy = y(d.percetage);
        return yy ? yy : 0;
      })
      .attr('r', '3px')
      .attr('fill', (d, i) => {
        if (!this.data) {
          return '#000000';
        }
        const start = 0x0ea3dc;
        const end = 0xf25745;
        const gap = Math.floor((end - start) /
          (this.data.length - 1));
        return '#' + (start + i * gap).toString(16);
      })
      .attr('opacity', '1');

    circle.append('text')
      .attr('x', (d: IChartTimeLineItem) => {
        const xx = x(new Date(d.date));
        return xx ? xx - 10 : '';
      })
      .attr('y', d => {
        const yy = y(d.percetage);
        return yy ? (d.percetage < 90 ? yy - 10 : yy + 20) : '';
      })
      .text(d => d.percetage + '%')
      .attr('fill', (d, i) => {
        if (!this.data) {
          return '#000000';
        }
        const start = 0x0ea3dc;
        const end = 0xf25745;
        const gap = Math.floor((end - start) /
          (this.data.length - 1));
        return '#' + (start + i * gap).toString(16);
      });

    const tickG = svg.append('g')
      .call(xAxis);

    tickG.select('.domain').remove();
    tickG.select('text')
      .style('font-size', '1em');
  }

}

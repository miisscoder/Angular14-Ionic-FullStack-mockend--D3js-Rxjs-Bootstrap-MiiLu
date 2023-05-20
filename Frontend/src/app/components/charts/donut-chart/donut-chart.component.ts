import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IChartDonutItem } from '../../../models/chart-donut';
import { color } from '../../../constants';
import * as d3 from 'd3';
import * as _ from 'lodash';

@Component({
  selector: 'app-donut-chart',
  templateUrl: 'donut-chart.component.html',
  styleUrls: [`donut-chart.component.scss`],
})
export class DonutChartComponent implements OnInit, OnChanges {
  @Input() data?: IChartDonutItem[];
  @Input() radius: number = 0;
  @Input() imageUrl: string = '';
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
    const __ = this;
    const widthC = this.radius * 2;
    const heightC = this.radius * 2;
    const arrcc = d3.arc().innerRadius(this.radius * 0.75).outerRadius(this.radius);
    const pie = d3.pie()
      .sort(null)
      .value((d: any) => d ?.percent);

    const arcs = pie(this.data as any);

    d3.select('#donut-chart').select('svg').remove();
    const svg = d3.select('#donut-chart')
      .append('svg')
      .attr('width', widthC)
      .attr('height', heightC)
      .attr('viewBox', `0, 0, ${widthC}, ${heightC}`);

    const g = svg.append('g')
      .attr('transform', `translate(${widthC / 2},${heightC / 2})`);

    g.selectAll('path')
      .data(arcs)
      .join('path')
      .attr('fill', (d: any) => {
        const f = _.find(color, (o: any) => o[`category`] === d ?.data[`category`]);
        return f ? f[`color`] : '#000000';
      })
      .attr('d', arrcc as any);

    if (this.imageUrl) {
      g.append('image')
        .attr('xlink:href', this.imageUrl)
        .attr('x', '-0.3rem')
        .attr('y', '-0.3rem')
        .attr('width', '0.6rem')
        .attr('height', '0.6rem');
    }
  }

}

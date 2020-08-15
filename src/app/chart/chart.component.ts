import { Input, Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chartData;
  @Input() chartLabels;
  @Input() label;
  lineChartData: ChartDataSets[] ;

  lineChartLabels: Label[] ;
  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#3A80BA',
      backgroundColor: 'rgba(255,255,255, 0)',
      borderWidth: 4
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';


  constructor() { }

  ngOnInit(): void {
    this.lineChartData = [
      { data: this.chartData, label: this.label },
    ];
    this.lineChartLabels = this.chartLabels;
  }

}

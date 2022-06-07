import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  // public view: any[] = [700, 400];
  // public showXAxis = true;
  // public showYAxis = true;
  // public gradient = false;
  // public showLegend = true;
  // public showXAxisLabel = true;
  // public xAxisLabel:any= "Years";
  // public showYAxisLabel = true;
  // public yAxisLabel:any= "Salary";
  // // public graphDataChart: any[];
  // public colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };
  view: any = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  xScaleMin:any= new Date("2000-01-01");
  xScaleMax:any= new Date("2015-01-01");
  // line, area
  autoScale = true;
  data1:any;
  data2:any;
  data3:any;
  data4:any;
  data5:any;



  referenceLinesData: any = [{
    name: "max",
    value: 9500000,
  },
  {
    name: "average",
    value: 9000000,
  },{
    name: "min",
    value: 8000000,
  }]

   constructor(private dataService:DataService ) {
  }

  ngOnInit(): void {
    this.data1=this.dataService.data1
    this.data2=this.dataService.data2
    this.data3=this.dataService.data3
    this.data4=this.dataService.data4
    this.data5=this.dataService.data5
  }

}

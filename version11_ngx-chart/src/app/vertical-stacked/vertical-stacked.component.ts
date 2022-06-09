import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-vertical-stacked',
  templateUrl: './vertical-stacked.component.html',
  styleUrls: ['./vertical-stacked.component.css']
})
export class VerticalStackedComponent implements OnInit {
  multi: any[] = [];
  view: any = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  animations: boolean = true;


  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };


  constructor() {    Object.assign(this, { multi });
}

  ngOnInit(): void {
  }
  onSelect(event:any) {
    console.log(event);
  }
}

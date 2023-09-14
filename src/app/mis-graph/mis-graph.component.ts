import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { DataQualityMisService } from '../Service/data-quality-mis.service';
import { HttpClient } from '@angular/common/http';
import { MatDatepickerInputEvent } from '@angular/material';
import { formatDate } from '@angular/common';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';




@Component({
  selector: 'app-mis-graph',
  templateUrl: './mis-graph.component.html',
  styleUrls: ['./mis-graph.component.scss']
})
export class MisGraphComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['FAIL', 'PASS'];
  

  Weekly: boolean;
  Daily: boolean;
  Monthly: boolean;
  daygraph: any;
  report_name: any;
  ctx: string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>;
  Day: string = 'Daily1';
  week: string = 'Weekly1';
  Chart: any;
  data: any;
  module: any;
  TOTAL : any; 
  PASS : any;
  FAIL : any;
  
  



  constructor(private router: Router, private mis: DataQualityMisService, private http: HttpClient) {
    localStorage.getItem('Day')
    console.log(localStorage.getItem('Day'));
    localStorage.getItem('week')
    console.log(localStorage.getItem('week'));
    // data.REPORT_NAME
    localStorage.getItem('data')
    this.report_name = localStorage.getItem('data');
    console.log(" this.report_name", this.report_name);


    // dynamic dropdown
    this.countryCtrl = new FormControl();
    this.filteredCountry = this.countryCtrl.valueChanges.pipe(
      startWith(''),
      map((country) =>
        country ? this.filtercountry(country) : this.country_lis.slice()
      )
    );
// dynamic dropdown
  }

  chart: any = null;
  chartData: any = null;


  ngOnInit(): void {

    // Fetch JSON data
    this.http.get('../../assets/graph.json').subscribe((data:any) => {
      console.log('data..', data);
      console.log('...',data.mayur);
      // this.filter=data.mayur;
      // console.log(" this.filteredCountry", this.filteredCountry);
      

      this.chartData = data;
      this.drawStackedBarChart();
      this.drawPieChart();
      this.drawModuleWise();
      this.drawPerticularSubModule();
      this.selectModule();

    });

  }

//   search(){
//     this.http.get('../../assets/searchgraph.json').subscribe((search:any) => {
// console.log("search",search);
// console.log('mayur',search.mayur);


//     })
//   }
  

  drawStackedBarChart() {
    const Data = this.chartData.Data;
    const Pie = this.chartData.Pie;
    this.TOTAL= this.chartData.TOTAL;
    this.PASS= this.chartData.PASS;
    this.FAIL= this.chartData.FAIL;
    this.module = this.chartData.Module;

    const ctx = document.getElementById('barChartData') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {

      type: 'bar',

      data: {
        labels: Data,
        datasets: Pie.map((s) => ({
          label: s.name,
          data: s.data,
          backgroundColor: ['lightblue', 'lightpink']

        }),
        )
      },

      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            stacked: true,

          }],
          yAxes: [{
            stacked: true,
          }],
        },
        responsive: true, 
        maintainAspectRatio: false, 
      },

    });
  }

  drawPieChart() {
    const Data = this.chartData.Data;
    const Pie = this.chartData.Pie;

    var ctx = document.getElementById("pie-chart") as HTMLCanvasElement;
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Data,
        datasets: Pie.map((s) => ({
          data: s.data,
          backgroundColor: ["lightblue", "lightpink"],
        }),
        )
      },
      options: {
        responsive: true, 
        maintainAspectRatio: false, 
      }
    });
  }

  drawModuleWise(){
    const moduleName = this.chartData.Sub_moduleName;
    const pass = this.chartData.pass;
    const fail = this.chartData.fail;
    const Data = this.chartData.Data;

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',

      data: {
        labels: moduleName,
        datasets: [{
          label:Data[0],
          data: pass,
          backgroundColor: 'lightblue'
        },
        {
          label:Data[1],
          data: fail,
          backgroundColor: 'lightpink',
        }
      ]
      },

      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,
          }],
        },
        responsive: true, 
        maintainAspectRatio: false, 
      },

    });
    
  }

  drawPerticularSubModule(){
    const moduleName = this.chartData.Sub_moduleName;
    const pass = this.chartData.pass;
    const fail = this.chartData.fail;
    const Data = this.chartData.Data;
    const ctx = document.getElementById('chart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',

      data: {
        labels: moduleName,
        datasets: [{
          label:Data[0],
          data: pass,
          backgroundColor: 'lightblue'
        },
        {
          label:Data[1],
          data: fail,
          backgroundColor: 'lightpink',
        }
      ]
      },

      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,
          }],
        },
        responsive: true, 
        maintainAspectRatio: false, 
      },

    });
    
  }

  // for date selection
  dateSelect:any;
  monthSelect:any;
  dateSelection(event: MatDatepickerInputEvent<Date>) {
    this.dateSelect=`${event.value}`;
    this.dateSelect = formatDate(this.dateSelect, "dd/MM/yyyy", "en");
     console.log('dateSelect >>',this.dateSelect);
  }
 
// for date selection
    monthSelection(event: MatDatepickerInputEvent<Date>) {
    this.monthSelect=`${event.value}`;
    this.monthSelect = formatDate(this.monthSelect, "MM/yyyy", "en");
     console.log('monthSelect >>',this.monthSelect);
  }
// for date selection
  
// drop down for select module
  textTypes :any;
  textType :any;
  selectedObject:any;
  selectModule(){
    const moduleName = this.chartData.DropdownForSelectProduct;
    const Data = this.chartData.Dropdown;
    this.textTypes =  moduleName;
    this.textType =  Data;
  }
  handleChange(index) {
    this.selectedObject = this.textTypes[index];
    console.log(this.selectedObject);
  }
  passFailActivity(index){
    let Obj = {
      module : this.chartData.Module,
      value : this.textType[index]
    }
    console.log(Obj);
    this.mis.misdaily(Obj).subscribe(res => {
    })
    
  }
// drop down for select module



  redirectPage() {

    localStorage.setItem('Day', this.Day);
    console.log(localStorage.getItem('Day'));
    localStorage.setItem('week', this.week);
    console.log(localStorage.getItem('week'));
    this.router.navigate(['/Mis-Module'])

  }

  
  length: number;

  countryCtrl: FormControl;
  filteredCountry: Observable<any[]>;
  
  country_lis: Country[] =
  [
    { "name": "Afghanistan" },
    { "name": "Åland Islands" },
    { "name": "Albania" },
    { "name": "Algeria" }
  ];
arr:any;
  filtercountry(name: string) {
  this.arr = this.country_lis. filter(
      (country) => country.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
console.log(this.arr, "mayur")
    return this.arr.length ? this.arr : [{ name: 'No Item found' }];
  }


  
  

}

export class Country {
  constructor(public name: string) {}
}

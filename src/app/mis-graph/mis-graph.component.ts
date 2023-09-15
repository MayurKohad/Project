import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { DataQualityMisService } from '../Service/data-quality-mis.service';
import { HttpClient } from '@angular/common/http';
import { MatDatepickerInputEvent } from '@angular/material';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-mis-graph',
  templateUrl: './mis-graph.component.html',
  styleUrls: ['./mis-graph.component.scss']
})
export class MisGraphComponent implements OnInit {

  public variables = ['One','Two','County', 'Three', 'Zebra', 'XiOn'];
  public variables2 = [{ id: 0, name: 'One' }, { id: 1, name: 'Two' }];

  // public filteredList1 = this.variables.slice();
  // public filteredList2 = this.variables.slice();
  // public filteredList3 = this.variables.slice();
  // public filteredList4 = this.variables.slice();
  // public filteredList5 = this.variables2.slice();

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

  }

  chart: any = null;
  chartData: any = null;
  Data:any;

  searchText: string;
  ngOnInit(): void {

    // Fetch JSON data
    this.http.get('../../assets/graph.json').subscribe((data:any) => {
      console.log('data..', data);

      this.chartData = data;
      this.Data=data.filteredList1;
      console.log(this.Data);
      
      this.drawStackedBarChart();
      this.drawPieChart();
      this.drawModuleWise();
      this.drawPerticularSubModule();
      this.selectModule();
    });

  }


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
  startDate:any;
  addStartDate(event: MatDatepickerInputEvent<Date>) {
    this.startDate=`${event.value}`;
    this.startDate = formatDate(this.startDate, "dd/MM/yyyy", "en");
     console.log('addStartDate >>',this.startDate);
  }
// drop down for select module
  

  textTypes :any;
  selectModule(){
    const moduleName = this.chartData.Sub_moduleName;
    this.textTypes = 
    [
      {value : 'Select Module'},
      { value : 'value1' },
      { value : 'value2' },
      { value : 'value3' },
      { value : 'value4' },
  
    ]
  }
  
  handleChange(index) {
    console.log(this.textTypes[index]);
    // this.selectedObject = this.textTypes[index];
  }



  redirectPage() {

    localStorage.setItem('Day', this.Day);
    console.log(localStorage.getItem('Day'));
    localStorage.setItem('week', this.week);
    console.log(localStorage.getItem('week'));
    this.router.navigate(['/Mis-Module'])

  }

  


  
}


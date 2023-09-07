import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { DataQualityMisService } from '../Service/data-quality-mis.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mis-graph',
  templateUrl: './mis-graph.component.html',
  styleUrls: ['./mis-graph.component.scss']
})
export class MisGraphComponent implements OnInit {


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


  ngOnInit(): void {

    // Fetch JSON data
    this.http.get('../../assets/graph.json').subscribe((data) => {
      console.log('data..', data);

      this.chartData = data;
      this.drawStackedBarChart();
      this.drawPieChart();
    });

  }


  drawStackedBarChart() {
    const categories = this.chartData.categories;
    const series = this.chartData.series;
    this.TOTAL= this.chartData.TOTAL;
    this.PASS= this.chartData.PASS;
    this.FAIL= this.chartData.FAIL;

    const PASS = this.chartData.series[0].backgroundColor = 'lightblue';
    const FAIL = this.chartData.series[1].backgroundColor = 'lightpink';

    const ctx = document.getElementById('barChartData') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {

      type: 'bar',

      data: {
        labels: categories,
        datasets: series.map((s) => ({
          label: s.name,
          data: s.data,
          backgroundColor: s.backgroundColor

        }),
        )
      },

      options: {
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



  redirectPage() {

    localStorage.setItem('Day', this.Day);
    console.log(localStorage.getItem('Day'));
    localStorage.setItem('week', this.week);
    console.log(localStorage.getItem('week'));
    this.router.navigate(['/Mis-Module'])

  }
}


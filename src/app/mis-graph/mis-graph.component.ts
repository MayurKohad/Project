import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-mis-graph',
  templateUrl: './mis-graph.component.html',
  styleUrls: ['./mis-graph.component.scss']
})
export class MisGraphComponent implements OnInit {
  Weekly: boolean;
  Daily: boolean;
  Monthly: boolean;

  constructor( private router: Router) { }

  ngOnInit(): void {
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 55];
    var barColors = ["red", "green","blue","orange","grey"];
    
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "World 2018"
        }
      }
    });

  
  }

}

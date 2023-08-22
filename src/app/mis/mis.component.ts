import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mis',
  templateUrl: './mis.component.html',
  styleUrls: ['./mis.component.scss']
})
export class MISComponent implements OnInit {
  
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


  mis_Modules(){
    this.router.navigate(['Mis-Module']);
  }
  
}
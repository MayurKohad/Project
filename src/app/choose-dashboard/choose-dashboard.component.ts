import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-dashboard',
  templateUrl: './choose-dashboard.component.html',
  styleUrls: ['./choose-dashboard.component.scss']
})
export class ChooseDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  DataQuality(){
    this.router.navigate(['dashboard-page']);

  }
  DefectTracker(){
    this.router.navigate(['DefectTracker']);

  }
  VALUATION(){
    this.router.navigate(['main-valuation'])
  }

}

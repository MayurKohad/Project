import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'protractor';
import { DataQualityMisService } from '../Service/data-quality-mis.service';
import { DefectTrackerService } from '../Service/defect-tracker.service';

@Component({
  selector: 'app-mis-module',
  templateUrl: './mis-module.component.html',
  styleUrls: ['./mis-module.component.scss'],
})
export class MisModuleComponent implements OnInit {

  Daily: boolean = false;
  Weekly: boolean;
  Monthly: boolean;
  firstPage: boolean;
  secondPage: boolean;
  MonthlyFirstPage: boolean;
  MonthlyFourPage: boolean;
  MonthlythirdPage: boolean;
  MonthlySecondPage: boolean;
  DailyData: any;
  constructor(private router: Router, private Data_Quality_Mis: DataQualityMisService) { }

  // ---------------------Daily Modules ----------------//
  Allocation_Charges: any;
  Mortality_Charges: any;
  Discontinuance_Charges: any;
  Maturity_over_but_status_not_changed: any;
  Admin_charges: any;
  Admin_Skipped_cases: any;
  Mortality_Skipped_Cases: any;
  Allocation_Charges_Unitization: any;
  Mortality_Charges_Unitization: any;
  Admin_charges_Unitization: any;
  Policies_Matured_But_Not_In_Due_List: any;
  Deposit_Present_but_not_Allocated: any;
  Status_not_lapsed_after_grace_Period: any;
  LTR_not_Preceed_after_Lock_in_period: any;
  SB_Skipped_Cases: any;
  Unclaimed_Movement: any;

  // ---------------------Daily Modules ----------------//

  ngOnInit(): void {
    const x = localStorage.getItem('Daily');
    const y = localStorage.getItem("Weekly");
    const z = localStorage.getItem('Monthly')
    if (x === 'Daily') {
      this.Daily = true;
      this.Weekly = false;
      this.Monthly = false
      this.router.navigate(['Mis-Module']);

      let Obj = {
        moduleId: '123',
        request_action: 'daily pass/fail cases',
      }
      this.Data_Quality_Mis.Daily(Obj).subscribe(res => {
        console.log(res.response_text, 'Result')
        this.Allocation_Charges = res.response_text[0].Allocation_Charges;
        this.Mortality_Charges = res.response_text[0].Mortality_Charges;
        this.Discontinuance_Charges = res.response_text[0].Discontinuance_Charges
        this.Maturity_over_but_status_not_changed = res.response_text[0].Maturity_over_but_status_not_changed;
        this.Admin_charges = res.response_text[0].Admin_charges;
        this.Admin_Skipped_cases = res.response_text[0].Admin_Skipped_cases;
        this.Mortality_Skipped_Cases = res.response_text[0].Mortality_Skipped_Cases;
        this.Allocation_Charges_Unitization = res.response_text[0].Allocation_Charges_Unitization;
        this.Mortality_Charges_Unitization = res.response_text[0].Mortality_Charges_Unitization;
        this.Admin_charges_Unitization = res.response_text[0].Admin_charges_Unitization;
        this.Policies_Matured_But_Not_In_Due_List = res.response_text[0].Policies_Matured_But_Not_In_Due_List;
        this.Deposit_Present_but_not_Allocated = res.response_text[0].Deposit_Present_but_not_Allocated;
        this.Status_not_lapsed_after_grace_Period = res.response_text[0].Status_not_lapsed_after_grace_Period;
        this.LTR_not_Preceed_after_Lock_in_period = res.response_text[0].LTR_not_Preceed_after_Lock_in_period;
        this.SB_Skipped_Cases = res.response_text[0].SB_Skipped_Cases;
        this.Unclaimed_Movement = res.response_text[0].Unclaimed_Movement;
      })
    }

    if (y === 'Weekly') {
      this.Weekly = true;
      this.Daily = false;
      this.Monthly = false
      this.router.navigate(['Mis-Module']);
    }

    if (z === 'Monthly') {
      this.Weekly = false;
      this.Daily = false;
      this.Monthly = true
      this.router.navigate(['Mis-Module']);
    }
    this.firstPage = true;
    this.secondPage = false;
    this.MonthlyFirstPage = true;
    this.MonthlyFourPage = false;
    this.MonthlythirdPage = false;
    this.MonthlySecondPage = false;
  }

  page1() {
    this.firstPage = true;
    this.secondPage = false;
  }
  page2() {
    this.secondPage = true;
    this.firstPage = false
  }

  nextM1() {
    this.MonthlyFirstPage = true;
    this.MonthlySecondPage = false;
    this.MonthlythirdPage = false;
    this.MonthlyFourPage = false;
  }
  nextM2() {
    this.MonthlyFirstPage = false;
    this.MonthlySecondPage = true;
    this.MonthlythirdPage = false;
    this.MonthlyFourPage = false;
  }
  nextM3() {
    this.MonthlyFirstPage = false;
    this.MonthlySecondPage = false;
    this.MonthlythirdPage = true;
    this.MonthlyFourPage = false;
  }
  nextM4() {
    this.MonthlyFirstPage = false;
    this.MonthlySecondPage = false;
    this.MonthlythirdPage = false;
    this.MonthlyFourPage = true;
  }



  redirct(){
    if(true){
      this.router.navigate(['mis']);
      setTimeout(()=>{
        localStorage.clear();
      },1000)
    }
  }
  View(data:any){
    console.log(data, 'event')
    this.router.navigate(['mis-graph'])
  }

}

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
  REPORT_NAMES: string;
  // module1: string;
  module1=localStorage.getItem('Day')
  // console.log(localStorage.getItem('Day'));
 module2=localStorage.getItem('week')
  selectedRowD: number;
  moduleData: any;
  // console.log(localStorage.getItem('week'));

  constructor(private mis:DataQualityMisService, private router: Router, private defect:DefectTrackerService) {
    // constructor(private router: Router, private Data_Quality_Mis: DataQualityMisService) { }


   
  }

  ngOnInit(): void {


    if (this.module1=== 'Daily1') {
      console.log("dayly print");
      this.daily();
      localStorage.clear();
    }
    else if (this.module2=== 'Weekly1') {
      console.log("Weekly1 print");
      this.Weekly();
      localStorage.clear();
      
    }


  }
  moduleName: any;
  dailymodule: boolean = false;

  daily() {
   
    let obj = {
      moduleId: '401',
      request_action: 'Defect Tracker',
    }

    this.mis.misdaily(obj).subscribe(res => {
      console.log("res", res)

      // console.log("res.response_text", res.response_text);
      this.moduleData = res.response_text
      // console.log(" this.moduleData", this.moduleData);
      this.dailymodule = true;

    })
  }

  // DonEdit(index: number, item: any) {
  //   console.log(index);
  //   this.selectedRowD = index
  //   this.moduleData.forEach((element:any) => {
  //     element.isEdit = false;
  //   })
  //   item.isEdit = true;
  
  // }



  Weekly() {
    let obj = {
      moduleId: '401',
      request_action: 'Defect Tracker',
    }

    // this.mis.misdaily(obj).subscribe(res => {
    //   console.log("res", res)

    // console.log("res.response_text", res.response_text);
    // this.moduleName=res.response_text
    // console.log(" this.moduleName",  this.moduleName);
    // this.dailymodule = true;

    // this.message = res.response_message;
    // this.openConfirmationBox = true;
    // this.showMessageButton = true;
    // this.displayMessage = true;

    console.log('week page');

    // })
  }

  // daylibtn() {
    // localStorage.setItem('REPORT_NAME', this.REPORT_NAMES);
    // console.log(localStorage.setItem('REPORT_NAME', this.REPORT_NAMES))
    
    alldata:any;
    onEdit(ID: any, data: any) {
      // console.log(ID);
      // console.log(data);
      this.defect.setMessage(ID, data)
      // this.alldata= data;
      console.log('data',data);

      console.log('data',data.REPORT_NAME);
      localStorage.setItem('data',data.REPORT_NAME)

      
      this.router.navigate(['mis-graph'])
    }
  
  // }

//   mode(Event:any)
//   {
// console.log(Event, "Event..");
//   }


}

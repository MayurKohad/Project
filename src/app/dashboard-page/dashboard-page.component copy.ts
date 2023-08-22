import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { MessageDialogComponent } from "../dialog/message/message.component";
import { ModuleService } from '../Service/module.service';
import { ProcessService } from '../Service/process.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DashboardService } from '../Service/dashboard.service';
import { stringify } from '@angular/compiler/src/util';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  /*
  curr_projects = ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6',
    'Module 7', 'Module 8', 'Module 9', 'Module 10', 'Module 11', 'Module 12',
    'Module 13', 'Module 14', 'Module 15', 'Module 16', 'Module 17', 'Module 18'];
  */

  curr_project = [
    'DISCONTINUANCE_CHARGES', 'ADMIN_CHARGES', 'ALLOCATION_CHARGES', 'ADMIN_SKIPPED_CASES',
    'MORTALITY_SKIPPED_CASES'
  ];
  // ULIP_MATURITY, NON_ULIP_SURRENDER, ULIP_SURRENDER, LTR, NON_ULIP_MATURITY_CLAIM, SURVIVAL_BENEFIT, ANNUITY_PAYOUT,
  // NON_ULIP_DEATH_REPUDIATION
  curr_project_map = {
    'DISCONTINUANCE_CHARGES': 1,
    'ADMIN_CHARGES': 2,
    'ALLOCATION_CHARGES': 3, //100
    'ADMIN_SKIPPED_CASES': 4, //100
    'MORTALITY_SKIPPED_CASES': 5, //100
  };


  curr_process = ['PROCESS_INPUT', 'PROCESS_LOGIC', 'PROCESS_OUTPUT'];
  curr_process_map = { 'PROCESS_INPUT': 1, 'PROCESS_LOGIC': 2, 'PROCESS_OUTPUT': 3, 'PROCESS_OUTPUT_FLAG': 4, 'VIEWQCDATA': 5 };

  spliced_data = [];
  page_event = { pageIndex: 0, pageSize: 0 }

  @ViewChild('messageDlg', { static: false })
  messageDlg: MessageDialogComponent;

  constructor(
    private router: Router,
    private moduleService: ModuleService,
    private processService: ProcessService,
    private dash: DashboardService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    if (this.curr_project.length <= 6) {
      this.spliced_data = this.curr_project.slice(0).slice(0, 6);
    }
    else {
      this.spliced_data = this.curr_project.slice(0).slice(0, 12);
    }
    console.log('spliced_data ::', this.spliced_data);
    // this.moduleService.getModules().subscribe(data => {
    //   console.log(data)
    // }, err => {
    //   console.log(err)
    // })
  }

  pageChangeEvent(event) {
    this.page_event.pageIndex = event.pageIndex
    this.page_event.pageSize = event.pageSize
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.spliced_data = this.curr_project.slice(offset).slice(0, event.pageSize);
  }

  filterProjectName($event) {
    this.spliced_data = this.curr_project.filter(s => s.includes($event.target.value))
    if (!$event.target.value) {
      console.log(this.page_event)
      const offset = ((this.page_event.pageIndex + 1) - 1) * this.page_event.pageSize;
      this.spliced_data = this.curr_project.slice(offset).slice(0, this.page_event.pageSize);
    }
  }

  gotoPage(pageName: string, ele: string) {
    sessionStorage.setItem('name', ele)
    this.router.navigate([pageName])
  }

  projectInfo = {};

  sendProjectInfo(projectName: string) {
    console.log('sendProjectInfo called :: projectName : ', projectName);
    console.log(this.curr_project_map[projectName]);
    this.projectInfo = { 'module': projectName, 'id': this.curr_project_map[projectName] };
    console.log(this.projectInfo);

    this.router.navigate(['process'], { state: { moduleId: this.curr_project_map[projectName] } });

  }

  // Changes for UI  
  moduleId;
  subModuleId = 0;
  moduleName;
  hideDetails;

  module; //STAMPDUTY CHANGES
  menuenter(module) {
    // console.log('menuenter ::' , module); 
    this.module = module;
    console.log('menuenter ::', this.module);
    this.moduleId = this.curr_project_map[module];
    this.moduleName = module;
    this.subModuleId = 0;
    var params = {
      'module': module,
      'moduleId': this.moduleId,
      'moduleName': this.moduleName,
      'subModuleId': this.subModuleId
    }
    this.router.navigate(['view-qcdata'], { state: params });
  }

  subMenuEnter(module, subModuleId) {
    console.log('subMenuEnter ::', module, subModuleId);
    this.module = module;
    this.moduleId = this.curr_project_map[module];
    this.moduleName = module;
    this.subModuleId = subModuleId;

  }

  processQcValue;
  processId;
  dialogData;
  selectedPayout(process, val?,data?) {
    this.processQcValue = val;
    this.dialogData=data;

    if (process == 'VIEWQCDATA') {
      console.log(this.module, this.moduleId, this.moduleName, process, this.subModuleId);
      this.processId = this.curr_process_map[process];
      console.log('processId >>>>', this.processId);
      var params = {
        moduleId: this.moduleId,
        module: this.module,
        process: process,
        processId: this.processId,
        subModule_id: this.subModuleId
        //processId: this.curr_process_map['PROCESS_OUTPUT_FLAG'],
        //requested_by: 'Admin'
      };
      console.log('params::', params);
      this.router.navigate(['view-qcdata'], { state: params });
    }
    else {
      this.processId = this.curr_process_map[process];
      console.log('sendProcessInfo called :: processId : ', this.processId, 'moduleId :', this.moduleId, 'moduleName :', this.moduleName, 'subModule :', this.subModuleId);
      if ((this.moduleId === 10 && this.subModuleId === 2 && this.processId === 1) || (this.moduleId === 11 && this.subModuleId === 2 && this.processId === 1)) {
        // this.showDateTime(this.dialogData,process);
       this.dialog.open(this.dialogData)

      } 
      else {
      this.showOverlay = true;
        this.sendProcessInfo(process);
      }
    }
  }
  showDateTime() {
    console.log(this.startDate);
    console.log(this.endDate);
    this.dialog.closeAll()
    this.sendProcessInfo('PROCESS_INPUT')
    // this.sendProcessInfo(data);

  }
  startDate:string;
  endDate:string;
  addStartDate(event: MatDatepickerInputEvent<Date>) {
     this.startDate=`${event.value}`;
     this.startDate = formatDate(this.startDate, "dd/MM/yyyy", "en");
   }
 
   addEndDate(event: MatDatepickerInputEvent<Date>) {
      this.endDate=`${event.value}`;
      this.endDate = formatDate(this.endDate, "dd/MM/yyyy", "en");  
   }
  policyData_;
  showOverlay = false;
  exportTo;
  displayColumns;

  messageType; //06-05-21
  displayMessage = false;  //06-05-21
  message; //06-05-21
  isError = false;
  messageDetails;
  sendProcessInfo(process: string) {
    console.log('sendProcessInfo called :: processId : ', this.processId, 'moduleId :', this.moduleId, 'moduleName :', this.moduleName, 'subModule :', this.subModuleId);

    let paramInfo = {
      'module_id': this.moduleId,
      'request_action': this.processId,
      'requested_by': 'Admin'
    };
   
    if (this.subModuleId > 0) {
      //'subModule_id': this.subModuleId;
      paramInfo['subModule_id'] = this.subModuleId;
    }
    if((this.startDate && this.endDate && this.moduleId === 10 && this.subModuleId === 2 && this.processId === 1) || (this.startDate && this.endDate && this.moduleId === 11 && this.subModuleId === 2 && this.processId === 1)){
      paramInfo['endDate']=this.endDate;
      paramInfo['startDate']=this.startDate;
 
     }
    console.log('paramInfo ::', paramInfo);
    // console.log(JSON.stringify(paramInfo));

    console.log(typeof (this.moduleId));
    console.log(typeof (this.processId));

    this.processService.sendProcessDetails(paramInfo, process).subscribe(
      (response) => {
        console.log('response received ::', response);
        console.log(typeof (response));
        //  var res = response; //TODO
        //  response=[
        //    {
        //    "error_code":0,
        //    "error_message":"database error"
        //   }
        // //  ]
        // response = [{
        //     "response_code":1,
        //     "response_message":"No data available",
        //     "response_text":res
        //   }
        // ] //TODO
        // response = [{
        //   "error_code":1,
        //   "error_message":"No data available",
        //   "error_text":res
        //   }
        // ]
        // var res = response;
        // console.log(res);

        // response = [
        //   {
        //     response_code: 1,
        //     response_message: 'No data available',
        //     response_text: res,
        //   },
        // ];
        if (typeof (response) == 'string') {
          response = JSON.parse(response);
        }
        if (response.length > 0) {
          response = response[0];
          console.log('response received #2::', response);
          //  console.log('response received #3::', response.error_code);
        }


        if (response.response_message) {
          console.log('response.response_code #1');
          this.isError = false;

          this.messageType = 'Information Message :  ';
          console.log('messageType >>', this.messageType);

          this.message = 'server [ response_code : ' + response.response_code + ' ]';
          console.log('message >>', this.message);

          this.messageDetails = response.response_message;
          console.log('messageDetails >>>', this.messageDetails);
        } else {
          console.log('response.error_code #1');
          this.isError = true;

          this.messageType = 'Error Message :  ';
          console.log('messageType >>', this.messageType);

          this.message = 'server [ error_code : ' + response.error_code + ' ]';
          console.log('message >>', this.message);

          this.messageDetails = response.error_message;
          console.log('messageDetails >>>', this.messageDetails);
          //new         
          this.displayMessage = true;
          this.showOverlay = false;
          return;

        }

        if (response) {
          //console.log('response ==>', response);
          //this.showOverlay= false;

          this.router.navigate(['view-qcdata']);
          
        }
      },
      (error) => {

        // this.messageType = 'Error Message :  '
        console.log('Error ::', error);
        console.log(error.status);
        console.log(error.statusText);
        this.showOverlay = false;
        this.displayMessage = true;
        this.isError = true;

        this.messageType = 'Error Message :  ';
        console.log('messageType >>', this.messageType);

        this.message = 'client [ error_code : ' + error.status + ' ]';
        console.log('message >>', this.message);

        this.messageDetails = error.statusText;
        console.log('messageDetails >>>', this.messageDetails);
        return;

        //06-05-21
        // error = {
        //   "response_code": 'ORA-00911',
        //   "response_message": error.response_code +' : ' + error.response_message
        // }
        // this.message = error.status +' : ' + error.statusText;
        // this.message = '500 ' +' : ' + 'Internal Server Error';

        // alert('Error Occurred in Process');

        // error = {
        //   "error_code": 'ORA-00911',
        //   "error_message": 'Invalid Character'
        // }
        // alert('Error ' + error.error_code + ' : ' + error.error_message);
      }
    );

    //this.router.navigate( ['dashboard'], { state : { routeParam : this.routeParam } } ); view-qcdata
  }

  showMessage() {
    this.displayMessage = false;
  }


}

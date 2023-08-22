import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefectTrackerService } from '../Service/defect-tracker.service';
import { JsontoexcelService } from '../Service/jsontoexcel.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-defect-tracker',
  templateUrl: './defect-tracker.component.html',
  styleUrls: ['./defect-tracker.component.scss']
})
export class DefectTrackerComponent implements OnInit {
  message: string;
  openConfirmationBox: boolean;
  showMessageButton: boolean;
  displayMessage: boolean;
  registration: any;
  isSubmitted: boolean;
  data: any;
  Data: any;
  misTable: boolean;



  constructor(private router: Router, private fb: FormBuilder, private defect: DefectTrackerService, private excelService: JsontoexcelService) {
    // this.Existing();
  }
  defectform = false;
  displayedColumns: any;
  ngOnInit(): void {
    // this.dateDisable();
    //   this.displayedColumns = ['Whizible_id', 'DOR_to_OPS/IT', 'Val_DQ_IRDA','Dept_Resposible','System',
    // 'ULIP_Non_ULIP_Grps_VIP','Resource','Impacted_Policies','Amount_impacted','Current_Status_of_Whizible_id'];
    this.registration = this.fb.group({
      ID: ['', [Validators.required]],
      MONTH: ['', [Validators.required]],
      VAL_DQ_IRDA: ['', [Validators.required]],
      WHIZIBLE: ['', [Validators.required]],
      DEPT: ['', [Validators.required]],
      CATEGORY: ['', [Validators.required]],
      SYSTEM: ['', [Validators.required]],
      ASPECT: ['', [Validators.required]],
      ULIP_NONULIP_GRPS_VIP: ['', [Validators.required]],
      PRODUCT_ID_COVERED: ['', [Validators.required]],
      STATUS_OF_WHIZIBLE: ['', [Validators.required]],
      ISSUES_IN_DETAIL: ['', [Validators.required]],
      IMPACTED_POLICIES: ['', [Validators.required]],
      SAMPLE_POL_CUST_ID: ['', [Validators.required]],
      AMOUNT_IMPACTED: ['', [Validators.required]],
      REASON_FOR_CLOSING: ['', [Validators.required]],
      DOR_TO_OPS_IT: ['', [Validators.required]],
      REMARKS: ['', [Validators.required]],
      FY: ['', [Validators.required]],
      RESOURCE: ['', [Validators.required]],
      DATE_CLOSURE: ['', [Validators.required]],
      SEVERITY :['', [Validators.required]],


    })
  }

  // Submit(){
  //   this.registration.value;
  //   console.log(this.registration.value);
  //   this.isSubmitted=true;
  //   // this.route.navigate(['login']);

  //   // this.ser.postData(this.registration.value).subscribe((res)=>{
  //   //   console.log(res);
  //   // })

  // }



  backPage() {
    this.router.navigate(['ChooseDashboardComponent']);
  }

  //   maxDate:any;
  //    /* Date disable */
  // dateDisable() {
  //   var date = new Date();
  //   var todayDate: any = date.getDate();
  //   var month: any = date.getMonth() + 1;
  //   var year: any = date.getFullYear();
  //   this.maxDate = year ;
  // console.log('year',this.maxDate = year )

  // }

  ADD() {
    this.defectform = true;
    this.existingtable = false;
    this.misTable = false;

  }

  ID: any;
  MONTH: any;
  VAL_DQ_IRDA: any;
  WHIZIBLE_ID: any;
  DEPT_RESPOSIBLE: any;
  CATEGORY: any;
  SYSTEM: any;
  ASPECT: any;
  ULIP_NONULIP_GRPS_VIP: any;
  PRODUCT_ID_COVERED: any;
  STATUS_OF_WHIZIBLE: any;
  ISSUES_IN_DETAIL: any;
  IMPACTED_POLICIES: any;
  SAMPLE_POL_CUST_ID: any;
  AMOUNT_IMPACTED: any;
  REASON_FOR_CLOSING: any;
  DOR_TO_OPS_IT: any;
  REMARKS: any;
  FY: any;
  RESOURCE: any;
  DATE_CLOSURE: any;
  SEVERITY : any;

  submit() {

    this.registration.value;
    console.log(this.registration.value);
    this.isSubmitted = true;
    let obj = {
      ID: this.ID,
      MONTH: this.MONTH,
      VAL_DQ_IRDA: this.VAL_DQ_IRDA,
      WHIZIBLE_ID: this.WHIZIBLE_ID,
      DEPT_RESPOSIBLE: this.DEPT_RESPOSIBLE,
      CATEGORY: this.CATEGORY,
      SYSTEM: this.SYSTEM,
      ASPECT: this.ASPECT,
      ULIP_NONULIP_GRPS_VIP: this.ULIP_NONULIP_GRPS_VIP,
      PRODUCT_ID_COVERED: this.PRODUCT_ID_COVERED,
      STATUS_OF_WHIZIBLE: this.STATUS_OF_WHIZIBLE,
      ISSUES_IN_DETAIL: this.ISSUES_IN_DETAIL,
      IMPACTED_POLICIES: this.IMPACTED_POLICIES,
      SAMPLE_POL_CUST_ID: this.SAMPLE_POL_CUST_ID,
      AMOUNT_IMPACTED: this.AMOUNT_IMPACTED,
      REASON_FOR_CLOSING: this.REASON_FOR_CLOSING,
      DOR_TO_OPS_IT: this.DOR_TO_OPS_IT,
      REMARKS: this.REMARKS,
      FY: this.FY,
      RESOURCE: this.RESOURCE,
      DATE_CLOSURE: this.DATE_CLOSURE,
      SEVERITY: this.SEVERITY,
      moduleId: '401',
      request_action: 'Defect Tracker',

    }

    this.defect.defectdata(obj).subscribe(res => {
      console.log('submit data')
      console.log("res", res)

      console.log("res", res.response_message)

      this.message = res.response_message;
      this.openConfirmationBox = true;
      this.showMessageButton = true;
      this.displayMessage = true;


    })
    this.ID = "";
    this.MONTH = "";
    this.VAL_DQ_IRDA = "";
    this.WHIZIBLE_ID = "";
    this.DEPT_RESPOSIBLE = "";
    this.CATEGORY = "";
    this.SYSTEM = "";
    this.ASPECT = "";
    this.ULIP_NONULIP_GRPS_VIP = "";
    this.PRODUCT_ID_COVERED = "";
    this.STATUS_OF_WHIZIBLE = "";
    this.ISSUES_IN_DETAIL = "";
    this.IMPACTED_POLICIES = "";
    this.SAMPLE_POL_CUST_ID = "";
    this.AMOUNT_IMPACTED = "";
    this.REASON_FOR_CLOSING = "";
    this.DOR_TO_OPS_IT = "";
    this.REMARKS = "";
    this.FY = "";
    this.RESOURCE = "";
    this.DATE_CLOSURE = "";
    this.SEVERITY = "";

  }

  table_data: any;
  existingtable: any

  Existing() {
    this.misTable = false
    this.existingtable = true;
    this.defectform = false;
    let obj = {

      moduleId: '402',
      request_action: 'Defect Tracker',
    }
    this.defect.defecttable(obj).subscribe(res => {
      console.log('submit data')
      console.log('res', res);
      console.log('res', res.response_text);
      this.Data = res.response_text;
      this.message = res.response_message;
      this.displayMessage = true;

      // console.log(res.response_text.DOR_TO_OPS_IT)

      console.log(this.Data)

    })

  }
  // getAnnualSummary() {
  //   this.excelService.getMonthlySummary().subscribe((res :any) => {
  //     // this.annualSummaryData = res;
  //     // console.log(this.annualSummaryData);
  //     // this.rowData = res;
  //     // console.log('row data', this.rowData);
  //   })
  // }


  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.Data, 'table_data');
    // console.log(this.table_data);
  }

  showMessage() {
    this.displayMessage = false;
  }


  get f() {
    return this.registration.controls;
  }


  onEdit(ID: any, data: any) {
    console.log(ID);
    console.log(data);
    this.defect.setMessage(ID, data)
    this.router.navigate(['update-data']);
  }


  // downloadFile(): void {
  //   this.excelService.getFinancialYear().subscribe((response:any) => {
  //     // let fileName = response.headers.get('Content-Disposition')?.split(';')[1].split('=')[1];
  //     let fileName = 'Annual_report';
  //     let blob:Blob = response.body as Blob;
  //     let a = document.createElement('a');
  //     a.download = fileName;
  //     a.href = window.URL.createObjectURL(blob);
  //     a.click();
  //   })
  // }
  AGEING  : any ;
  OPEN_LESS_THAN_10 : any ;
  OPEN_BETWEEN_11_30 : any ;
  OPEN_GREATER_THAN_30 : any ;
  CLOSE_LESS_THAN_10 : any ;
  CLOSE_BETWEEN_11_30 : any ;
  CLOSE_GREATER_THAN_30 : any ;

  Aging() {
    // this.router.navigate(['mis'])
    this.misTable = true
    this.existingtable = false;
    this.defectform = false;
    let obj = {
      moduleId: '403',
      request_action: 'Defect Tracker',
    }
    this.defect.misTable(obj).subscribe(res => {
      console.log('submit data')
      console.log('res', res);
      console.log('res text', res.response_text);
      // console.log('res', res.response_text.DQ);

      this.data = res.response_text;
      this.message = res.response_message;
      this.displayMessage = true;

    })
  }

  Render(){
    this.router.navigate(['mis']);
  }
}

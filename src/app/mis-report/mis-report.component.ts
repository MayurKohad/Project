import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { JsontoexcelService } from '../Service/jsontoexcel.service';

@Component({
  selector: 'app-mis-report',
  templateUrl: './mis-report.component.html',
  styleUrls: ['./mis-report.component.scss']
})
export class MisReportComponent implements OnInit {
  @Input()
  max: any;

  constructor(public gs:GlobalService,public es: JsontoexcelService) { }

  today = new Date();
  showHide: boolean = false
  ngOnInit(): void {
  }

  showHidePicker() {
    if (this.showHide) {
      this.showHide = false
    } else {
      this.showHide = true
    }
  }
 
startDate;
async getList(){
  this.gs.loader=true
  this.startDate = formatDate(this.startDate, "dd/MM/yyyy", "en");

let obj={
  module_id:35,
  submodule_id:1,
  start_date:this.startDate
}
console.log(obj);

await this.gs.getMisList(obj).subscribe((res)=>{
  console.log(res);
  this.gs.loader=false;
  this.startDate="";
  alert(res.response_message)
  if(res.response_text.length){
    this.es.exportAsExcelFile(res.response_text, 'mis_report');
  }else{
    alert("No data found")
  }

})
}

}

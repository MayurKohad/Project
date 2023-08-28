import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefectTrackerService {
  public id :any=new BehaviorSubject('');
  public data :any=new BehaviorSubject('');
  public currentId :any=this.id.asObservable();
  public currentData :any=this.data.asObservable()

  constructor( private httpClient : HttpClient) { }

  public defectdata( processDetails ) {
    console.log('sendProcessDetails :: ', processDetails );
    // console.log(this.processMap[process]);
     
     let url = '/core/defecttracker';     //new link used
    // let url="../../assets/bulk.json"
  // let url="../../assets/payoutCalculate.json"
    // let url="../../assets/bulk_surrender.json"
    console.log('url ===', url);

    //Make a call to API and get response which will be displayed inside the dashboard table

    let httpHeaders = new HttpHeaders( { 'Content-Type' : 'application/json' });    
    let options = {
      headers: httpHeaders,
      params: processDetails
    }; 

    return this.httpClient.post<any>(url , processDetails, options ); //TODO remove comments
    // return this.httpClient.get<any>(url);
  }
  

  public defecttable( processDetails ) {
    console.log('sendProcessDetails :: ', processDetails );
    // console.log(this.processMap[process]);
     
     let url = '/core/Existing_table';     //new link used
    // let url="../../assets/defect_table.json"
  // let url="../../assets/payoutCalculate.json"
    // let url="../../assets/bulk_surrender.json"
    console.log('url ===', url);

    //Make a call to API and get response which will be displayed inside the dashboard table

    let httpHeaders = new HttpHeaders( { 'Content-Type' : 'application/json' });    
    let options = {
      headers: httpHeaders,
      params: processDetails
    }; 

    return this.httpClient.post<any>(url , processDetails, options ); //TODO remove comments
    // return this.httpClient.get<any>(url , options);
  }


  // service for Data Update
  // getUpdateData(Id :string){
  //     return this.httpClient.get(`url/${Id}`);
  // }

  setMessage(ID:any,data:any){
    this.id.next(ID);
    this.data.next(data);
  }
  
  getMessage(){
    return this.currentId,this.currentData;
  }
  
  // update(data:any){
  //   let url= '/core/update_table';
  //   // let url = "../../assets/dataQuality.json";
  //   return this.httpClient.put(url, data);
  //   // return this.httpClient.get<any>(url);

  // }

  public update( processDetails ) {
    console.log('sendProcessDetails :: ', processDetails );
    // console.log(this.processMap[process]);
     
    let url= '/core/update_table';
  // let url="../../assets/defect_table.json"
  // let url="../../assets/payoutCalculate.json"
    // let url="../../assets/bulk_surrender.json"
    console.log('url ===', url);

    //Make a call to API and get response which will be displayed inside the dashboard table

    let httpHeaders = new HttpHeaders( { 'Content-Type' : 'application/json' });    
    let options = {
      headers: httpHeaders,
      params: processDetails
    }; 

    return this.httpClient.put<any>(url , processDetails, options ); //TODO remove comments
    // return this.httpClient.get<any>(url);
  }

  

  public misTable( processDetails ) {
    let url= '/core/mis_table';
  // let url="../../assets/dumy.json" 
    console.log('url mis ===', url);

    //Make a call to API and get response which will be displayed inside the dashboard table

    let httpHeaders = new HttpHeaders( { 'Content-Type' : 'application/json' });    
    let options = {
      headers: httpHeaders,
      params: processDetails
    }; 

    return this.httpClient.post<any>(url , processDetails, options ); //TODO remove comments
    // return this.httpClient.get<any>(url , options);
    
  }
  

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataQualityMisService {
  ColumnChart: any;

  constructor( private httpClient: HttpClient) { }

  

  public misdaily( processDetails ) {
    console.log('sendProcessDetails :: ', processDetails );
    // console.log(this.processMap[process]);
     
    //  let url = '/core/mis';     //new link used
    let url="../../assets/misDQ.json"
  // let url="../../assets/payoutCalculate.json"
    // let url="../../assets/bulk_surrender.json"
    console.log('url ===', url);

    //Make a call to API and get response which will be displayed inside the dashboard table

    let httpHeaders = new HttpHeaders( { 'Content-Type' : 'application/json' });    
    let options = {
      headers: httpHeaders,
      params: processDetails
    }; 

    // return this.httpClient.post<any>(url , processDetails, options ); //TODO remove comments
    return this.httpClient.get<any>(url);
  }
  }
  


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataQualityMisService {

  constructor( private httpClient: HttpClient) { }

  public Daily( processDetails ) {
    console.log('sendProcessDetails :: ', processDetails );     
    // let url= '/core/update_table';
  let url="../assets/Daily.json"
  
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

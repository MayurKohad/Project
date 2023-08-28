import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mis',
  templateUrl: './mis.component.html',
  styleUrls: ['./mis.component.scss']
})
export class MISComponent implements OnInit {
  Daily: string= 'Daily';
  Weekly: string= 'Weekly';
  Monthly: string= 'Monthly';
  
  constructor( private router: Router) { }
  ngOnInit(): void {
  
   
  }


  mis_Daily(){
    this.router.navigate(['Mis-Module']);
    if(true){
    localStorage.setItem('Daily', this.Daily);
    // setTimeout(()=>{
    //   localStorage.clear();
    // },1000)
  }
}
mis_Weekly(){
  this.router.navigate(['Mis-Module']);
    if(true){
    localStorage.setItem('Weekly', this.Weekly);
    // setTimeout(()=>{
    //   localStorage.clear();
    // },1000)
  }
}
mis_Monthly(){
  this.router.navigate(['Mis-Module']);
    if(true){
    localStorage.setItem('Monthly', this.Monthly);
    // setTimeout(()=>{
    //   localStorage.clear();
    // },1000)
  }
}

   
}
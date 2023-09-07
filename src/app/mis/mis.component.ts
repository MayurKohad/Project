import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mis',
  templateUrl: './mis.component.html',
  styleUrls: ['./mis.component.scss']
})
export class MISComponent implements OnInit {
 
  constructor( private router: Router) { }
  ngOnInit(): void {
  
  }


//   mis_Daily(){
//     this.router.navigate(['Mis-Module']);
//     if(true){
//     localStorage.setItem('Daily', this.Daily);
//     // setTimeout(()=>{
//     //   localStorage.clear();
//     // },1000)
//   }
// }
// mis_Weekly(){
//   this.router.navigate(['Mis-Module']);
//     if(true){
//     localStorage.setItem('Weekly', this.Weekly);
//     // setTimeout(()=>{
//     //   localStorage.clear();
//     // },1000)
//   }
// }
// mis_Monthly(){
//   this.router.navigate(['Mis-Module']);
//     if(true){
//     localStorage.setItem('Monthly', this.Monthly);
//     // setTimeout(()=>{
//     //   localStorage.clear();
//     // },1000)
//   }
// }

Day:string='Daily1';
week:string='Weekly1';
month:string='month1';

mis_Daily(){
   
    localStorage.setItem('Day', this.Day);
    console.log(localStorage.getItem('Day'));
        
    this.router.navigate(['Mis-Module']);
 
  }
  mis_Weekly(){
    
    localStorage.setItem('week', this.week);
    console.log(localStorage.getItem('week'));
        
    this.router.navigate(['Mis-Module']);
  }
  mis_Monthly(){
    
    localStorage.setItem('month', this.week);
    console.log(localStorage.getItem('month'));
        
    this.router.navigate(['Mis-Module']);
  }
   
}
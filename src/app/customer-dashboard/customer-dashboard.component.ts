import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelServiceService } from '../hotel-service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Icust_details } from './customer-dashboard.model';
import { forkJoin, tap,Observable } from 'rxjs';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  public cust:any[]=[];
  public hotel:any[]=[];
  constructor(private _hotel_service:HotelServiceService) { }
  formValue!:FormGroup;
  ngOnInit(): void {
    this._hotel_service.getBookingDetails()
    .subscribe(data=>{
      console.log("this is booking details table data",data);
      this.cust=data;
    });
  } 

  // constructor(private _http:HttpClient){}
  // ngOnInit(): void {
    
  //   let first=this._http.get('https://localhost:7217/api/Cust_details_');
  //   let second=this._http.get('https://localhost:7217/api/Booking_details');
  //   forkJoin([first,second]).subscribe(data=>{
  //     this.cust.push(data);
  //     console.log("first",this.cust);
  //    console.log(data);
  //    console.log("This is data[0]",data[0]);
     
  //    console.log("This is data[1]",data[1]);
  //   });
  //   }
  } 



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelServiceService } from '../hotel-service.service';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.css']
})
export class AddbookingComponent implements OnInit {

  constructor(private http:HttpClient,private toast:NgToastService) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.http.post('https://localhost:7217/api/Booking_details',data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);    
    this.toast.success({detail:"Success message",summary:"Booking Detail Updated successfully",duration:5000});
  }
}

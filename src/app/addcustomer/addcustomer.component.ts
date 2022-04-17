import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelServiceService } from '../hotel-service.service';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(private http:HttpClient,private toast:NgToastService) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.http.post('https://localhost:7217/api/Cust_details_',data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);
    this.toast.success({detail:"Success message",summary:"Customer Added successfully",duration:5000});
  }

}

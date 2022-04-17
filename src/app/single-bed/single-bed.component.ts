import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelServiceService } from '../hotel-service.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../payment-detail.model';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-single-bed',
  templateUrl: './single-bed.component.html',
  styleUrls: ['./single-bed.component.css']
})
export class SingleBedComponent implements OnInit {
  // room_descrip:string[] | undefined;

  constructor(private http:HttpClient,private service:HotelServiceService,private route:Router,private toast:NgToastService) { }

  ngOnInit(): void {
    // this.room_descrip=['single bed','double bed','suite','balcony room','mountain view','private villa'];
  }
  onSubmit(data:any){
    this.http.post('https://localhost:7217/api/billing_details',data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);
    this.toast.success({detail:"Success message",summary:"Your Booking was successfull,Now Head To Home Page",duration:5000});
    this.resetForm(data);
    this.route.navigateByUrl('/home');
        }
  

  resetForm(form: NgForm) {
    form.form.reset();
    // this.service.formData = new IBooking_deKCCKtail();
  }

}

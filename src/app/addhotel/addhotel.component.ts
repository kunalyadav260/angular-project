import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { HotelServiceService } from '../hotel-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {


  constructor(private http:HttpClient,private toast:NgToastService) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.http.post('https://localhost:7217/api/hotel_details_',data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);
    this.toast.success({detail:"Success message",summary:"Hotel Added successfully",duration:5000});
  }
}

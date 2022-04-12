import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from '../hotel-service.service';
import { IHotel } from '../hotel';

@Component({
  selector: 'app-booking',
  templateUrl:'./booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public hotel:any[]=[];
  constructor(private _hotel_service:HotelServiceService) { }

  ngOnInit(): void {
    this._hotel_service.getHotels()
    .subscribe(data=>{this.hotel=data});
  }

}

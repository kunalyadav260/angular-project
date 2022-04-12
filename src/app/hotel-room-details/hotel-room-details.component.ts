import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from '../hotel-service.service';
import { IHotel } from '../hotel';


@Component({
  selector: 'app-hotel-room-details',
  templateUrl: './hotel-room-details.component.html',
  styleUrls: ['./hotel-room-details.component.css']
})
export class HotelRoomDetailsComponent implements OnInit {
  public hotel_detail:any[]=[];
  constructor(private _hotel_service:HotelServiceService) { }

  ngOnInit(): void {
    this._hotel_service.getHotel_details()
    .subscribe(data=>{this.hotel_detail=data});
  }
}

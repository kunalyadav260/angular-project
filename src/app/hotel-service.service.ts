import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IHotel } from './hotel';
import {Observable, tap} from 'rxjs';
import { IHOTELDetails } from './hotel_details';
import { IBooking_detail } from './booking_detail';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(private http: HttpClient) {  }

  private _url:string ="https://localhost:7217/api/hotel_details_";
  private _url2:string="https://localhost:7217/api/room_type_details_";
  private _url3:string="";
  
  public loginAPIUrl : string = "https://localhost:7217/api/Login/login";
  public employeeAPIUrl : string = "https://localhost:7217/api/Cust_details_";


  getHotels():Observable<IHotel[]>{
    return this.http.get<IHotel[]>(this._url).pipe(tap(data=>console.log('ALL:'+JSON.stringify(data))));
  }
  getHotel_details():Observable<IHOTELDetails[]>{
    return this.http.get<IHOTELDetails[]>(this._url2);
  }
  PostEmployee(data : any){
    return this.http.post<any>(`${this.employeeAPIUrl}add_employee`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  DeleteEmployee(id : number){
    return this.http.delete<any>(`${this.employeeAPIUrl}delete_employee/`+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  UpdateEmployee(data : any){
    return this.http.put<any>(`${this.employeeAPIUrl}update_employee`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  GetEmployees(){
    return this.http.get<any>(`${this.employeeAPIUrl}get_all_employees`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  signUp(empObj : any){
    //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
    return this.http.post<any>(`${this.loginAPIUrl}signup`,empObj)
  }
  login(empObj:any){
    return this.http.post<any>(`${this.loginAPIUrl}login`,empObj)
  }  

}

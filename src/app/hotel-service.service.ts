import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IHotel } from './hotel';
import {forkJoin, Observable, tap} from 'rxjs';
import { IHOTELDetails } from './hotel_details';
import { IBooking_detail } from './booking_detail';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators'
import { Icust_details } from './customer-dashboard/customer-dashboard.model';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { PaymentDetail } from './payment-detail.model';


@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {
  [x: string]: any;
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {  }

  private _url:string ="https://localhost:7217/api/hotel_details_";
  private _url2:string="https://localhost:7217/api/room_type_details_";
  private _url3:string="";
  
  public loginAPIUrl : string = "https://localhost:7217/api/Login/";
  public employeeAPIUrl : string = "https://localhost:7217/api/Cust_details_";
  public bookingurl:string="https://localhost:7217/api/billing_details";


  
  GetEmployees():Observable<Icust_details[]>{
    return this.http.get<Icust_details[]>(this.employeeAPIUrl).pipe(tap(data=>console.log('ALL:'+JSON.stringify(data))));
  }
  getBookingDetails():Observable<IBooking_detail[]>{
    return this.http.get<IBooking_detail[]>(this.bookingurl).pipe(tap(data=>console.log('ALL:'+JSON.stringify(data))));

  }
  // GetEmployees():Observable<Icust_details[]>{
  //  let call1= this.http.get<Icust_details[]>(this.employeeAPIUrl).pipe(tap(data=>console.log('ALL:'+JSON.stringify(data))));
  //   let call2=this.http.get<Icust_details[]>(this.bookingurl).pipe(tap(data=>console.log('ALL:'+JSON.stringify(data))));
  //   // return forkJoin([call1,call2]);
  // }
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
  // GetEmployees(){
  //   return this.http.get<any>(`${this.employeeAPIUrl}get_all_employees`)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  signUp(empObj : any){
    //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
    return this.http.post<any>(`${this.loginAPIUrl}signup`,empObj)
  }
  login(empObj:any){
    return this.http.post<any>(`${this.loginAPIUrl}login`,empObj)
  }  
  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { UserModel } from '../shared/model/user.model';
import { HotelServiceService } from '../hotel-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public loginForm !: FormGroup;
  public loginObj = new UserModel();
  constructor(private fb :FormBuilder, private http : HttpClient,private toast:NgToastService,private router : Router,private api : HotelServiceService) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required]
    });
   localStorage.clear();
  }
  login(){
  //   this.http.get<any>("http://localhost:3000/signupUsers")
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  //     });
  //     if(user){
  //       alert("Login Success!!");
  //       this.router.navigate(['dashboard']);
  //         this.loginForm.reset();
  //     }
  //   },err=>{
  //     alert("Something went wrong!!")
  //   })


  this.loginObj.UserName = this.loginForm.value.email;
  this.loginObj.Password = this.loginForm.value.password;
  this.api.login(this.loginObj)
  .subscribe(res=>{
    alert(res.message);
    console.log("Token is ",res);
    localStorage.setItem('token',res.token);
    this.toast.success({detail:"Success message",summary:"Login was successfull",duration:10000});
    this.router.navigate(['/home']);
    localStorage.setItem('userType',res.userType);
  },err=>{
    alert("something went wrong");
    
    this.toast.error({detail:"Error Message",summary:"Something went wrong,Please try again later",duration:10000});
  })
   }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';
import { UserModel } from '../shared/model/user.model';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public signUpForm !: FormGroup;
  public signupObj = new UserModel();
  constructor(private fb :FormBuilder, private http : HttpClient,private router : Router,private toast:NgToastService, private api: HotelServiceService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullname:["", Validators.required],
      mobile:["",Validators.required],
      username:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required],
      usertype:["",Validators.required]
    })
  }

  signUp(){
  //   this.http.post<any>("http://localhost:3000/signupUser", this.signUpForm.value)
  //   .subscribe(res=>{
  //     alert("Signup Successfull");
  //     this.signUpForm.reset();
  //     this.router.navigate(['login'])
  //   },err=>{
  //     alert("Something went wrong");
  //   })
  // }
  
  this.signupObj.FullName = this.signUpForm.value.fullname;
  this.signupObj.UserName = this.signUpForm.value.username;
  this.signupObj.Password = this.signUpForm.value.password;
  this.signupObj.UserType = this.signUpForm.value.usertype;
  this.signupObj.Mobile = this.signUpForm.value.mobile
  this.api.signUp(this.signupObj)
  .subscribe(res=>{
    alert(res.message);
    console.log("Token is ",res);
    this.toast.success({detail:"Success message",summary:"Signup was successfull",duration:5000});
    this.signUpForm.reset();
    this.router.navigate(['/home'])
  })
}
}

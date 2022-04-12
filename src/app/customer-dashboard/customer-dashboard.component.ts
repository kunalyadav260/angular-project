import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelServiceService } from '../hotel-service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cust_details } from './customer-dashboard.model';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  formValue !: FormGroup;
  employeeData !: any;
  employeeObj : cust_details = new cust_details();
  showAdd !: boolean;
  showUpdate !: boolean;
  @Input() receive !: string;
  @Input() mobileSpecification !: any;
  role:string =""
  constructor(private api: HotelServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      cust_name: [''],
      cust_phone: [''],
      cust_email: [''],
      cust_add: ['']
    })
    this.getEmployeeDetails();
    this.role = localStorage.getItem('userType')!
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postEmployeeDetails() {
    this.employeeObj.cust_name = this.formValue.value.cust_name;
     this.employeeObj.cust_phone = this.formValue.value.cust_phone;
     this.employeeObj.cust_email = this.formValue.value.cust_email;
     this.employeeObj.cust_add = this.formValue.value.cust_add;

    this.api.PostEmployee(this.employeeObj)
      .subscribe(res => {
        console.log(res);
        let ref = document.getElementById('close');
      ref?.click();
      this.getEmployeeDetails();
      })
  }
  getEmployeeDetails() {
    this.api.GetEmployees()
    .subscribe(res=>{
      this.employeeData = res.employeeDetails;
      
    })
  }
  editEmployeeDetail(){
    this.employeeObj.cust_name = this.formValue.value.cust_name;
    this.employeeObj.cust_phone = this.formValue.value.cust_phone;
    this.employeeObj.cust_email = this.formValue.value.cust_email;
    this.employeeObj.cust_add = this.formValue.value.cust_add;
    this.api.UpdateEmployee(this.employeeObj)
    .subscribe(res=>{
      alert("Updated Successfully")
      let ref = document.getElementById('close');
      ref?.click();
      this.getEmployeeDetails();
    })
  }
  onEdit(row : any){
    this.employeeObj.cust_id = row.id;
    this.formValue.controls['cust_name'].setValue(row.cust_name);
    this.formValue.controls['cust_phone'].setValue(row.cust_phone);
    this.formValue.controls['cust_email'].setValue(row.cust_email);
    this.formValue.controls['cust_add'].setValue(row.cust_add);
    this.showUpdate = true;
    this.showAdd = false;
  }

  deleteEmployeeDetail(row : any){
   let clickedYes = confirm("Are you sure want to delete");
   if(clickedYes){
    this.api.DeleteEmployee(row.cust_id)
    .subscribe(res=>{
      alert("Deleted Successfully");
      this.getEmployeeDetails();
    })
   }
  }
}

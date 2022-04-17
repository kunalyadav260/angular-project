import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from '../hotel-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  HostListener } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: HotelServiceService,private toast:NgToastService) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
    });
  }
  ngOnInit(): void {
      
  }
  onSubmit() {
    this.contactForm.reset();
    
    this.toast.success({detail:"Success message",summary:"Form Submitted Successfully",duration:5000});
  }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelRoomDetailsComponent } from './hotel-room-details/hotel-room-details.component';
import { AdminComponent } from './admin/admin.component';
import { SingleBedComponent } from './single-bed/single-bed.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    BookingComponent,
    NopagefoundComponent,
    HotelRoomDetailsComponent,
    AdminComponent,
    SingleBedComponent,
    AddcustomerComponent,
    AddhotelComponent,
    AddbookingComponent,
    LoginComponent,
    SignupComponent,
    CustomerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

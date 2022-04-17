import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HotelRoomDetailsComponent } from './hotel-room-details/hotel-room-details.component';
import { AdminComponent } from './admin/admin.component';
import { SingleBedComponent } from './single-bed/single-bed.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';



const routes: Routes = [
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent,},
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  {path:'hotel-room-details',component:HotelRoomDetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'single-bed',component:SingleBedComponent},
  {path:'addcustomer',component:AddcustomerComponent},
  {path:'addhotel',component:AddhotelComponent},
  {path:'addbooking',component:AddbookingComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'customer-dashboard',component:CustomerDashboardComponent},
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

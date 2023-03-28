import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer-microservice/customer/customer.component';
import { ContactComponent } from './customer-microservice/contact/contact.component';
import { OrderComponent } from './customer-microservice/order/order.component';
import { ShowCustomersComponent } from './customer-microservice/show-customers/show-customers.component';
import { LoginComponent } from './customer-microservice/login/login.component';
import { DashboardComponent } from './customer-microservice/dashboard/dashboard.component';
import { RegistrationComponent } from './customer-microservice/registration/registration.component';
import { CarwasherComponent } from './carwasher-microservice/carwasher/carwasher.component';
import { CarwasherContactComponent } from './carwasher-microservice/carwasher-contact/carwasher-contact.component';
import { CarwasherDashboardComponent } from './carwasher-microservice/carwasher-dashboard/carwasher-dashboard.component';
import { CarwasherLoginComponent } from './carwasher-microservice/carwasher-login/carwasher-login.component';
import { CarwasherRegistrationComponent } from './carwasher-microservice/carwasher-registration/carwasher-registration.component';
import { CarwasherShowCustomersComponent } from './carwasher-microservice/carwasher-show-customers/carwasher-show-customers.component';
import { AdminLogicComponent } from './admin-microservice/admin-logic/admin-logic.component';
import { AdminDashboardComponent } from './admin-microservice/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-microservice/admin-login/admin-login.component';
import { ViewaddonsComponent } from './admin-microservice/viewaddons/viewaddons.component';
import { ViewcardetailsComponent } from './admin-microservice/viewcardetails/viewcardetails.component';
import { ViewpromosComponent } from './admin-microservice/viewpromos/viewpromos.component';
import { ViewCarwashersComponent } from './admin-microservice/view-carwashers/view-carwashers.component';
import { ViewordersComponent } from './admin-microservice/vieworders/vieworders.component';
import { ViewcustomersComponent } from './admin-microservice/viewcustomers/viewcustomers.component';
import { AddpromosComponent } from './admin-microservice/addpromos/addpromos.component';
import { AddcardetailsComponent } from './admin-microservice/addcardetails/addcardetails.component';
import { AddaddonsComponent } from './admin-microservice/addaddons/addaddons.component';
import { ViewaddonsCustomerComponent } from './customer-microservice/viewaddons/viewaddons.component';
import { ViewcardetailsCustomerComponent } from './customer-microservice/viewcardetails/viewcardetails.component';
import { ViewpromoCustomerComponent } from './customer-microservice/viewpromo/viewpromo.component';
import { ProfileComponent } from './carwasher-microservice/profile/profile.component';


const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full' },
  { path:'home', component: HomeComponent },
   {
    path: 'customer', component: CustomerComponent,
    children:[
      { path:'',redirectTo:'/customer/dashboard',pathMatch:'full'},
      { path:'order',component:OrderComponent,pathMatch:'full'},
      { path:'contact',component:ContactComponent,pathMatch:'full'},
      { path:'view',component:ShowCustomersComponent},
      { path:'login',component:LoginComponent,pathMatch:'full'},
      { path:'dashboard',component:DashboardComponent,pathMatch:'full'},
      { path:'registration',component:RegistrationComponent,pathMatch:'full'},
      {path:'viewaddons',component:ViewaddonsCustomerComponent},
      {path:'viewcardetails',component:ViewcardetailsCustomerComponent},
      {path:'viewpromos',component:ViewpromoCustomerComponent}
    ]
    },
    {
      path:'carwasher',component:CarwasherComponent,
      children:[
        {path:'',redirectTo:'/carwasher/dashboard',pathMatch:'full'},
        {path:'contact',component:CarwasherContactComponent},
        {path:'dashboard',component:CarwasherDashboardComponent},
        {path:'login',component:CarwasherLoginComponent},
        {path:'registration',component:CarwasherRegistrationComponent},
        {path:'vieworders',component:CarwasherShowCustomersComponent},
        {path:'profile',component:ProfileComponent}
      ]
    },
    {
      path:'admin',component:AdminLogicComponent,
      children:[
        {path:'',redirectTo:'/admin/dashboard',pathMatch:'full'},
        {path:'dashboard',component:AdminDashboardComponent},
        {path:'login',component:AdminLoginComponent},
        {path:'viewaddons',component:ViewaddonsComponent},
        {path:'viewcardetails',component:ViewcardetailsComponent},
        {path:'viewpromos',component:ViewpromosComponent},
        {path:'viewcarwashers',component:ViewCarwashersComponent},
        {path:'vieworders',component:ViewordersComponent},
        {path:'viewcustomers',component:ViewcustomersComponent},
        {path:'add_promos',component:AddpromosComponent},
        {path:'add_cardetails',component:AddcardetailsComponent},
        {path:'add_addons',component:AddaddonsComponent}
      ]
    },
   { path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { MaterialModule } from '../material/material.module';
import { CustomerMicroserviceRoutingModule } from './customer-microservice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewpromoCustomerComponent } from './viewpromo/viewpromo.component';
import { ViewaddonsCustomerComponent } from './viewaddons/viewaddons.component';
import { ViewaddonsCustomersComponent } from './viewaddons-customers/viewaddons-customers.component';
import { ViewcardetailsCustomerComponent } from './viewcardetails/viewcardetails.component';



@NgModule({
  declarations: [
    CustomerComponent,
    OrderComponent,
    ContactComponent,
    ShowCustomersComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    PaymentComponent,
    ViewcardetailsCustomerComponent,
    ViewpromoCustomerComponent,
    ViewaddonsCustomerComponent,
    ViewaddonsCustomersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CustomerMicroserviceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CustomerComponent
  ]
})
export class CustomerMicroserviceModule { }

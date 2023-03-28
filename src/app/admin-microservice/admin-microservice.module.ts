import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMicroserviceRoutingModule } from './admin-microservice-routing.module';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminLogicComponent } from './admin-logic/admin-logic.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewpromosComponent } from './viewpromos/viewpromos.component';
import { ViewaddonsComponent } from './viewaddons/viewaddons.component';
import { ViewcardetailsComponent } from './viewcardetails/viewcardetails.component';
import { MaterialModule } from '../material/material.module';
import { ViewCarwashersComponent } from './view-carwashers/view-carwashers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';
import { AddcardetailsComponent } from './addcardetails/addcardetails.component';
import { AddpromosComponent } from './addpromos/addpromos.component';
import { AddaddonsComponent } from './addaddons/addaddons.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminLogicComponent,
    AdminLoginComponent,
    ViewpromosComponent,
    ViewaddonsComponent,
    ViewcardetailsComponent,
    ViewCarwashersComponent,
    ViewordersComponent,
    ViewcustomersComponent,
    AddcardetailsComponent,
    AddpromosComponent,
    AddaddonsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminMicroserviceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    AdminMicroserviceRoutingModule
  ]
})
export class AdminMicroserviceModule { }

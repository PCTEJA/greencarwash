import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarwasherDashboardComponent } from './carwasher-dashboard/carwasher-dashboard.component';
import { CarwasherLoginComponent } from './carwasher-login/carwasher-login.component';
import { CarwasherRegistrationComponent } from './carwasher-registration/carwasher-registration.component';
import { CarwasherShowCustomersComponent } from './carwasher-show-customers/carwasher-show-customers.component';
import { CarwasherComponent } from './carwasher/carwasher.component';
import { MaterialModule } from '../material/material.module';
import { CarWasherMicroserviceRoutingModule } from './carwasher-microservice-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    CarwasherDashboardComponent,
    CarwasherLoginComponent,
    CarwasherRegistrationComponent,
    CarwasherShowCustomersComponent,
    CarwasherComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarWasherMicroserviceRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarwasherMicroserviceModule { }

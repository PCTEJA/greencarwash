import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarwasherContactComponent } from './carwasher-contact/carwasher-contact.component';
import { CarwasherLoginComponent } from './carwasher-login/carwasher-login.component';
import { CarwasherShowCustomersComponent } from './carwasher-show-customers/carwasher-show-customers.component';
import { CarwasherComponent } from './carwasher/carwasher.component';


const routes: Routes = [
  {
    path: 'carwasher', component: CarwasherComponent,
    children:[
      {
        path:'view',
        component:CarwasherShowCustomersComponent
      },
      {
        path:'contact',
        component:CarwasherContactComponent
      },
      {
        path:'login',
        component:CarwasherLoginComponent
      },
      {
        path:'dashboard',
        component:CarwasherLoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarWasherMicroserviceRoutingModule { }

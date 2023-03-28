import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { ViewaddonsComponent } from './viewaddons/viewaddons.component';
import { ViewcardetailsComponent } from './viewcardetails/viewcardetails.component';
import { ViewpromosComponent } from './viewpromos/viewpromos.component';

const routes: Routes = [
  {path:'dashboard',component:AdminDashboardComponent},
  {path:'login',component:AdminLoginComponent},
  {path:'viewaddons',component:ViewaddonsComponent},
  {path:'viewcardetails',component:ViewcardetailsComponent},
  {path:'viewpromos',component:ViewpromosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMicroserviceRoutingModule { }

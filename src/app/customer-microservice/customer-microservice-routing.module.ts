import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';

const routes: Routes = [
  {
    path: 'customer', component: CustomerComponent,
    children:[
      {
        path:'view',
        component:ShowCustomersComponent
      },
      {
        path:'order',
        component:OrderComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'dashboard',
        component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerMicroserviceRoutingModule { }

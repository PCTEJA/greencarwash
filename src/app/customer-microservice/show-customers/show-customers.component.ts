import { Component, OnInit } from '@angular/core';
import { CustomerauthService } from 'src/app/services/customerauth.service';
import {CustomerService} from '../../services/customer.service'

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {
  public _opened: boolean = false;
  orders:any = []

  constructor(private customers:CustomerService,customerAuth:CustomerauthService) {
    const username  = customerAuth.getCustomerName();
      this.customers.getOrdersForUser(username).subscribe(order=>{
        this.orders=order;
        console.log(this.orders);
        console.log(username);
      })
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  public delete(id:string){
    let resp= this.customers.delete(id);
    resp.subscribe((data)=>this.orders=data);
    console.log(id);
  }

  ngOnInit(): void {
  }

}

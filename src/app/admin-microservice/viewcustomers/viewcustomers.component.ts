import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.css']
})
export class ViewcustomersComponent implements OnInit {

  public _opened: boolean = false;
  cust:any = []

  constructor(private customers:CustomerService,private admin:AdminService) {
      this.customers.getOrdersData().subscribe(customer=>{
        this.cust=customer;

      })
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  public delete(id:string){
    let resp= this.admin.deleteCustomer(id);
    resp.subscribe((data)=>this.cust=data);
    console.log(id);
  }

  ngOnInit(): void {
  }

}

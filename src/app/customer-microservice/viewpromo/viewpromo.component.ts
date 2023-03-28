import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-viewpromo',
  templateUrl: './viewpromo.component.html',
  styleUrls: ['./viewpromo.component.css']
})
export class ViewpromoCustomerComponent implements OnInit {
  public _opened: boolean = false;
  promos:any = []

  constructor(private customer:CustomerService) {
    this.customer.getpromos().subscribe(promo=>{
      this.promos=promo;

    })
  }
  ngOnInit() {
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

}

import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public _opened: boolean = false;
  public isActive:boolean = true;
  customer:any = []
  constructor() {

  }
  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  public active(isActive:boolean){
    this.isActive = isActive;
  }
  ngOnInit(): void {
  }

}

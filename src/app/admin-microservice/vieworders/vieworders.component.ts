import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {

  public _opened: boolean = false;
  orders:any = []

  constructor(private admin:AdminService) {
      this.admin.getOrdersData().subscribe(order=>{
        this.orders=order;
        console.log(this.orders);
      })
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  ngOnInit(): void {
  }

}

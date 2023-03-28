import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-viewaddons',
  templateUrl: './viewaddons.component.html',
  styleUrls: ['./viewaddons.component.css']
})
export class ViewaddonsCustomerComponent implements OnInit {

  public _opened: boolean = false;
  addons:any = []

  constructor(private customer:CustomerService) {
    this.customer.getAddOns().subscribe(addon=>{
      this.addons=addon;

    })
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
    console.log(this.addons);
  }

  editAddons(id:string){

  }



  ngOnInit(): void {
  }

}

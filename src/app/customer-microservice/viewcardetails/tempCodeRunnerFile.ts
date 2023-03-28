import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-viewcardetails',
  templateUrl: './viewcardetails.component.html',
  styleUrls: ['./viewcardetails.component.css']
})
export class ViewcardetailsCustomerComponent implements OnInit {

  public _opened: boolean = false;
  details:any = []

  constructor(private customer:CustomerService) {
    this.customer.getCarDetails().subscribe(carDetails=>{
      this.details=carDetails;

    })
  }
  ngOnInit() {
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  editCarDetails(id:string){
    console.log(this.details)
  }
}

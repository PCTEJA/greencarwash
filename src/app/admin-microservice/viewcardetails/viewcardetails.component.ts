import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewcardetails',
  templateUrl: './viewcardetails.component.html',
  styleUrls: ['./viewcardetails.component.css']
})
export class ViewcardetailsComponent implements OnInit {

  public _opened: boolean = false;
  details:any = []

  constructor(private admin:AdminService,public router: Router) {
    this.admin.getCarDetails().subscribe(carDetails=>{
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

  deleteCarDetails(id:any){
    this.admin.deleteCarDetails(id).subscribe(car=>{
      this.details=car;
      this.router.navigate(['/admin/viewcardetails'])
      console.log(this.details);
    })
  }

}

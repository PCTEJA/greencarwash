import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-carwashers',
  templateUrl: './view-carwashers.component.html',
  styleUrls: ['./view-carwashers.component.css']
})
export class ViewCarwashersComponent implements OnInit {

  public _opened: boolean = false;
  public message: string = '';
  washers:any = []

  constructor(private admin:AdminService) {
      this.admin.getCarWasher().subscribe(washer=>{
        this.washers=washer;
        console.log(this.washers);
      })
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  delete(id:any){
    this.admin.deleteWasher(id).subscribe(data=>{
      console.log(data)
      this.message = "Deleted!";
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewpromos',
  templateUrl: './viewpromos.component.html',
  styleUrls: ['./viewpromos.component.css']
})
export class ViewpromosComponent implements OnInit {

  public _opened: boolean = false;
  promos:any = []

  constructor(private admin:AdminService) {
    this.admin.getPromos().subscribe(promo=>{
      this.promos=promo;

    })
  }
  ngOnInit() {
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  editPromos(id:string){
    console.log(this.promos)
  }

  deletePromos(id:any){
    this.admin.deletePromos(id).subscribe(car=>{
      this.promos=car;
      console.log(this.promos);
    })
  }

}

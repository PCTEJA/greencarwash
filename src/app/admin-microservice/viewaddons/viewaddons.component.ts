import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewaddons',
  templateUrl: './viewaddons.component.html',
  styleUrls: ['./viewaddons.component.css']
})
export class ViewaddonsComponent implements OnInit {

  public _opened: boolean = false;
  addons:any = []

  constructor(private admin:AdminService) {
    this.admin.getAddOns().subscribe(addon=>{
      this.addons=addon;

    })
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
    console.log(this.addons);
  }

  editAddons(id:string){

  }

  deleteAddons(id:any){
    this.admin.deleteAddOns(id).subscribe(washer=>{
      this.addons=washer;
      console.log(this.addons);
    })
  }

  ngOnInit(): void {
  }

}

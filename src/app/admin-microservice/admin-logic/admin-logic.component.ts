import { Component, OnInit } from '@angular/core';
import { AdminauthService } from 'src/app/services/adminauth.service';

@Component({
  selector: 'app-admin-logic',
  templateUrl: './admin-logic.component.html',
  styleUrls: ['./admin-logic.component.css']
})
export class AdminLogicComponent implements OnInit {

  public _opened: boolean = false;
  public isActive:boolean = true;
  public username: string = '';
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

import { Component, OnInit } from '@angular/core';
import { WasherauthService } from 'src/app/services/washerauth.service';

@Component({
  selector: 'app-carwasher',
  templateUrl: './carwasher.component.html',
  styleUrls: ['./carwasher.component.css']
})
export class CarwasherComponent implements OnInit {
  public _opened: boolean = false;
  public isActive:boolean = true;
  customer:any = []
  constructor(private washerAuth:WasherauthService) { }
  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  public active(isActive:boolean){
    this.isActive = isActive;
  }
  ngOnInit(): void {
  }

  logout(){
    this.washerAuth.logout();
  }

}

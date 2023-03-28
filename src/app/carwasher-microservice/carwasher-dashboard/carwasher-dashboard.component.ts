import { Component, OnInit } from '@angular/core';
import { CarwasherService } from 'src/app/services/carwasher.service';
import { WasherauthService } from 'src/app/services/washerauth.service';

@Component({
  selector: 'app-carwasher-dashboard',
  templateUrl: './carwasher-dashboard.component.html',
  styleUrls: ['./carwasher-dashboard.component.css']
})
export class CarwasherDashboardComponent implements OnInit {
  username:string;
  constructor(private carwasherAuth:WasherauthService) {
    this.username = carwasherAuth.getWasherName();
    if(!this.username) this.username = "Car Washer";
   }

  ngOnInit(): void {
  }

}

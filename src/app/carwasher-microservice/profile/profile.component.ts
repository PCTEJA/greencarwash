import { Component, OnInit } from '@angular/core';
import { CarwasherService } from 'src/app/services/carwasher.service';
import { WasherauthService } from 'src/app/services/washerauth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  washerDetails:any ;
  constructor(private washerService:CarwasherService,private washerAuth:WasherauthService) {
    const username = washerAuth.getWasherName();
    console.log(username);
    washerService.getProfileData(username).subscribe(data=>console.log(this.washerDetails=data))
    console.log(this.washerDetails);
   }
  getWasherDetails(){
    console.log(this.washerDetails);
  }
  ngOnInit(): void {
    
  }

}

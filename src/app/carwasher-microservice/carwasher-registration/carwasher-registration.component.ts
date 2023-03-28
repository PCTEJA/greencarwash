import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CarwasherService } from 'src/app/services/carwasher.service';
import { carWasherDetails } from './carwasherRegisterInfo';
@Component({
  selector: 'app-carwasher-registration',
  templateUrl: './carwasher-registration.component.html',
  styleUrls: ['./carwasher-registration.component.css']
})
export class CarwasherRegistrationComponent implements OnInit {

  constructor(private washer:CarwasherService) { }
  carwasherDetails:carWasherDetails = {
    washerName:"",
    washerPlace:"",
    washerAddress:"",
    washerRating:"",
    washerEmail:""
  }

  message:any;
  RegistrationForm = new FormGroup({
    name : new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),

  })

  public registerNow(){
    let res = this.washer.postRegistration(this.carwasherDetails);
    res.subscribe(data=>this.message=data)
    console.log(this.carwasherDetails);
  }

  ngOnInit(): void {
  }

}

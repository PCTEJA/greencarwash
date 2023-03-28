import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerDetails } from './customerDetails';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customerDetails:CustomerDetails = {username:"",password:"",customerEmail:"",
  customerAddress:"",customerPlace:""}

  message:any;

  constructor(private customer:CustomerService) { }

  RegistrationForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),
    customerAddress : new FormControl('',Validators.required),
    customerEmail : new FormControl('',Validators.required),
    customerPlace : new FormControl('',Validators.required)
  });

  public registerNow(){
    let res = this.customer.postRegistration(this.customerDetails);
    res.subscribe(data=>this.message=data)
    console.log(this.customerDetails);
    console.log(this.customerDetails);
  }
  ngOnInit(): void {
  }

}

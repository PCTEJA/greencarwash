import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {WasherauthService} from '../../services/washerauth.service';

@Component({
  selector: 'app-carwasher-login',
  templateUrl: './carwasher-login.component.html',
  styleUrls: ['./carwasher-login.component.css']
})
export class CarwasherLoginComponent implements OnInit {
  username:string='';
  password:string='';
  LoginForm = new FormGroup({
    name : new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
  })
  constructor(private WasherauthService: WasherauthService) { }

  ngOnInit(): void {
  }

  login(){
    this.WasherauthService.authenticate(this.username, this.password);
    console.log(this.username)
  }
  getForm(){

  }

}

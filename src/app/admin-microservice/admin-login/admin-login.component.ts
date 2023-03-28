import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminauthService } from 'src/app/services/adminauth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username:string='';
  password:string='';

  constructor(private adminauthService: AdminauthService) { }
  LoginForm = new FormGroup({
    name : new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
  })

  login(){
    this.adminauthService.authenticate(this.username, this.password);
    console.log(this.username)
  }

  ngOnInit(): void {
  }

}

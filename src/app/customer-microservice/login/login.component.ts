import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CustomerauthService } from 'src/app/services/customerauth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  constructor(private customerAuth: CustomerauthService ) { }

   LoginForm = new FormGroup({
    name : new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
  });

   login(){
    this.customerAuth.authenticate(this.username, this.password);
    console.log(this.username)
  }

  ngOnInit(): void {
  }

}

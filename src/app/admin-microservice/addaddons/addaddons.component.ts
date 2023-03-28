import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AddOnModel } from './addon';
@Component({
  selector: 'app-addaddons',
  templateUrl: './addaddons.component.html',
  styleUrls: ['./addaddons.component.css']
})
export class AddaddonsComponent implements OnInit {

  addonDetails:AddOnModel = {addon:"",cost:0,
  active:false}

  message:any;

  constructor(private admin:AdminService) { }
  AddonForm = new FormGroup({
    name : new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    place : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),

  })

  public addAddon(){
    let res = this.admin.postAddons(this.addonDetails);
    res.subscribe(data=>this.message=data)
    console.log(this.addonDetails);
  }

  ngOnInit(): void {
  }

}

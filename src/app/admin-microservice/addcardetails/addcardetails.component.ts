import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AddCarDetails } from './addcardetails';

@Component({
  selector: 'app-addcardetails',
  templateUrl: './addcardetails.component.html',
  styleUrls: ['./addcardetails.component.css']
})
export class AddcardetailsComponent implements OnInit {

  addCarDetails:AddCarDetails = {type:"",price:0,
  active:false}

  message:any;

  constructor(private admin:AdminService,public router: Router) { }
  AddonForm = new FormGroup({
    name : new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    place : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),

  })

  public addCar(){
    let res = this.admin.postCarDetails(this.addCarDetails);
    res.subscribe(data=>this.message=data);
    this.router.navigate(['/admin/viewcardetails']);
    console.log(this.addCarDetails);
  }

  ngOnInit(): void {
  }

}

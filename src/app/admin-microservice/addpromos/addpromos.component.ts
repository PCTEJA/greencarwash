import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AddPromo } from './promos';

@Component({
  selector: 'app-addpromos',
  templateUrl: './addpromos.component.html',
  styleUrls: ['./addpromos.component.css']
})
export class AddpromosComponent implements OnInit {

  addPromo:AddPromo = {code:"",price:0,description:"",
  active:false}

  message:any;

  constructor(private admin:AdminService,public router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  AddPromosForm = new FormGroup({
    code : new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
  })

  public addCar(){
    let res = this.admin.postPromos(this.addPromo);
    res.subscribe(data=>this.message=data)
    console.log(this.addPromo);
  }

}

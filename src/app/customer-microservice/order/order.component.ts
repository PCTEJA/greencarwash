import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';
import { OrderInfo } from './orderinfo';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{
  message:any;
  addons:any = [];
  promos:any = [];
  details:any = [];
  price:number = 0;
  addOnPrice:number;
  promoPrice:number;
  carDetailsPrice:number;
  name:any;
  output:any;

  order: OrderInfo={carModel: "",carName: "",date: "",orderId: 0,phoneNo: 0,userId: 0,washerName: "",washpackId: 0}

  constructor(private customer:CustomerService) {
    this.addOnPrice=0;
    this.promoPrice=0;
    this.carDetailsPrice=0;
  }
  orderForm = new FormGroup({
    name : new FormControl('',Validators.required),
    userid: new FormControl('',Validators.required),
    phoneNo: new FormControl('',Validators.required),
    washerName: new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    washpackId: new FormControl('',Validators.required),
    carName: new FormControl('',Validators.required),
    carModel: new FormControl('',Validators.required)
  });
  placeOrder(){
    // this.order.addOnCost=Number(this.addOnPrice);
    // this.order.promoprice=Number(this.promoPrice);
    // this.order.washcost=Number(this.carDetailsPrice);
    this.customer.postOrder(this.order).subscribe(data=>this.message=data);
    console.log(this.message);
    console.log(this.order);
  }

  getPrice(){
    // this.price = +(this.customer.getWashPackPrice(this.order.washpackId));
    // console.log(this.price);
    this.customer.getWashPackPrice(this.order.washpackId).subscribe(washpack=>{
      this.output=washpack;
      console.log(this.output);
    });
    console.log(this.output);
  }
  
  // sum(){
  //   this.price = +this.addOnPrice - +this.promoPrice + +this.carDetailsPrice ;
  // }
  // ngOnInit(): void {
  //   this.customer.getAddOns().subscribe(addon=>{
  //     this.addons=addon;
  //   })

  //   this.customer.getpromos().subscribe(promo=>{
  //     this.promos=promo;

  //   })

    // this.customer.getCarDetails().subscribe(carDetails=>{
    //   this.details=carDetails;

    // })

  // }

  confirm(){
    Swal.fire({
      title: 'Place Order?',
      text: "Your order will be confirmed",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Done!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.placeOrder();
      }
    })
  }

}

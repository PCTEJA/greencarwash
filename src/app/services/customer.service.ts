import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentInfo } from '../customer-microservice/paymentinfo';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getOrdersData(){
    let url = 'http://localhost:8082/user/view_orders';
    return this.http.get(url);
  }

  getAddOns(){
    let url = 'http://localhost:8082/user/view_addons';
    return this.http.get(url);
  }

  getpromos(){
    let url = 'http://localhost:8082/user/view_promos';
    return this.http.get(url);
  }

  getOrdersForUser(username:string){
    let url = `http://localhost:8082/user/view_orders/${username}`
    return this.http.get(url);
  }

  getCarDetails(){
    let url = 'http://localhost:8082/user/view_cardetails';
    return this.http.get(url);
  }

  postRegistration(customer:any){
    return this.http.post('http://localhost:8082/user/new_customer',customer,{responseType:'text' as 'json'})
  }
  getWashPackPrice(id:number){
    return this.http.get(`http://localhost:7071/admin/allpacks/${id}`);
  }
  postOrder(order:any){
   return this.http.post('http://localhost:8081/order/addorder',order,{responseType:'text' as 'json'})
  }

  delete(id:string){
    return this.http.delete(`http://localhost:8082/user/delete_order/${id}`);
  }
}

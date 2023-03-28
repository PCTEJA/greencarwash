import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarwasherService {


  constructor(private http:HttpClient) { }

  getOrdersData() {
    let url = 'http://localhost:8081/carwasher/view_orders';
    return this.http.get(url);
  }

  getProfileData(username:string){
    let url = `http://localhost:8081/carwasher/profile/${username}`;
    return this.http.get(url);
  }

  postRegistration(customer:any){
    return this.http.post('http://localhost:8081/carwasher/new_washer',customer,{responseType:'text' as 'json'})
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
x:any;
  constructor(private http:HttpClient) { }
  getOrdersData(){
    let url = 'http://localhost:8080/admin/all/orders';
    return this.http.get(url);
  }

  getCustomersData(){
    let url = 'http://localhost:8080/admin/all/customers';
    return this.http.get(url);
  }

  getCarWasher(){
    let url = 'http://localhost:8080/admin/all/washers';
    return this.http.get(url);
  }

  getAddOns(){
    let url = 'http://localhost:8080/admin/all/add_ons';
    return this.http.get(url);
  }

  getCarDetails(){
    let url = 'http://localhost:8080/admin/all/car_details';
    return this.http.get(url);
  }

  getPromos(){
    let url = 'http://localhost:8080/admin/all/promo';
    return this.http.get(url);
  }

  postAddons(addon:any){
    let url = "http://localhost:8080/admin/new_addon";
    return this.http.post(url,addon,{responseType:'text' as 'json'})

  }

  postCarDetails(carDetails:any){
    let url = "http://localhost:8080/admin/new_car";
    return this.http.post(url,carDetails,{responseType:'text' as 'json'})
  }

  postPromos(promoDetails:any){
    let url = "http://localhost:8080/admin/new_promo";
    return this.http.post(url,promoDetails,{responseType:'text' as 'json'})
  }

  deleteAddOns(id:string){
    let url = `http://localhost:8080/admin/delete_addons/${id}`;
    return this.http.delete(url,{responseType:'text' as 'json'});
  }

  deleteCustomer(id:string){
    let url = `http://localhost:8080/admin/delete_customer/${id}`;
    return this.http.delete(url,{responseType:'text' as 'json'});
  }

  deleteWasher(id:string){
    return this.http.delete(`http://localhost:8080/admin/delete_washer/${id}`,{responseType:'text' as 'json'});
  }
  deleteCarDetails(id:string){
    return this.http.delete(`http://localhost:8080/admin/delete_cardetails/${id}`,{responseType:'text' as 'json'});
  }
  deletePromos(id:string){
    return this.http.delete(`http://localhost:8080/admin/delete_promo/${id}`,{responseType:'text' as 'json'});
  }
}

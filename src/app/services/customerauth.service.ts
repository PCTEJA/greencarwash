import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomerauthService {

  customerName:string='';
  constructor(private http: HttpClient, private router: Router) { }

  authenticate(username: string, password: string){
    return this.http.post("http://localhost:8082/Customer/auth", {username: username, password: password})
    .subscribe(
      (userData: any)=> {
        if(userData.response=="No"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Credentials!',
          })
          this.router.navigate(['customer/login']);
        }
        else{
        localStorage.setItem('username',username);
        let token= "Bearer "+userData.response;
        localStorage.setItem('token',token);
        console.log(token);
        localStorage.getItem('username');
        this.router.navigate(['customer']);
        console.log(sessionStorage);
      }}
    );
  }

  getCustomerName(){
    // return this.customerName = sessionStorage['username'];
    return this.customerName = localStorage['username'];
  }


  // register(user:any ){
  //   return this.http.post("http:localhost:8080/Admin/register", user);
  // }

  register(user:any ){
    return this.http.post("http://localhost:8082/Customer/subs", user);
  }

  isLoggedIn(){
    let user= localStorage.getItem('username');
    console.log(user);
    // console.log("------------"+user);
    // console.log(sessionStorage.getItem('token'));
    return !(user==null);
  }

  logout(){
    console.log(localStorage);
    window.localStorage.clear();
    console.log(localStorage);
  }
}

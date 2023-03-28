import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  AdminName:string='';
  constructor(private http: HttpClient, private router: Router) { }

  authenticate(username: string, password: string){
    return this.http.post("http://localhost:8080/Admin/auth", {username: username, password: password})
    .subscribe(
      (userData: any)=> {
        // console.log(userData);
        if(userData.response=="No"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Credentials!',
            footer: '<a href="">Try Again</a>'
          })
          this.router.navigate(['admin/login']);
        }
        else{
        sessionStorage.setItem('username', username);
        let token= "Bearer "+userData.response;
        sessionStorage.setItem('token', token);
        console.log(token);
        sessionStorage.setItem('userId', userData.userId);
        sessionStorage.setItem('name', sessionStorage['userName']);
        sessionStorage.getItem('username');
        this.router.navigate(['admin']);
      }}
    );
  }

  getAdminName(){
    return this.AdminName = sessionStorage['username'];
  }


  // register(user:any ){
  //   return this.http.post("http:localhost:8080/Admin/register", user);
  // }

  isLoggedIn(){
    let user= sessionStorage.getItem('username');
    console.log(user);
    // console.log("------------"+user);
    // console.log(sessionStorage.getItem('token'));
    return !(user==null);
  }

  logout(){
    // console.log(sessionStorage);
    sessionStorage.clear();
    // console.log(sessionStorage);
  }

}

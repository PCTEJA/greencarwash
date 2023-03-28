import { Component, OnInit } from '@angular/core';
import { AdminauthService } from 'src/app/services/adminauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  username:string;
  constructor(private adminAuth:AdminauthService) {
    this.username = adminAuth.getAdminName();
    if(!this.username) this.username = "Admin";
   }

  ngOnInit(): void {
  }

}

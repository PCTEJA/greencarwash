import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  public _opened: boolean = false;
  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  ngOnInit(): void {
  }

}

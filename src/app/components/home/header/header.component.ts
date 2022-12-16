import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() propagar = new EventEmitter();

  isUser: boolean = false;
  isAdmin: boolean = true;
  isGuest: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUser(){
    let user = "user";
    this.propagar.emit(user)
  }
  onAdmin(){
    let admin = "admin";
    this.propagar.emit(admin)
  }
  onGuest(){
    let guest = "guest";
    this.propagar.emit(guest)
  }

}

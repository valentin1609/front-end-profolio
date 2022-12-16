import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isUser: boolean = false;
  isAdmin: boolean = false;
  isGuest: boolean = false;

  recibirDato(mje:string): void {
    if(mje==="user"){
        this.isUser = !this.isUser
        this.isAdmin = false;
        this.isGuest = false; 
    }
    if(mje==="admin"){
      this.isAdmin = !this.isAdmin;
      this.isUser = false;
      this.isGuest = false;
    }
    if(mje==="guest"){
      this.isGuest = !this.isGuest
      this.isUser = false;
      this.isAdmin = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

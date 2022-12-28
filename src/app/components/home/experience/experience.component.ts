import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

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

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onlogOut(): void {
    this.authService.logOut();
  }

}

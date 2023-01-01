import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isUser: boolean = false;
  isAdmin: boolean = false;
  isGuest: boolean = false;

  recibirDato(mje: string): void {
    if (mje === 'user') {
      this.isUser = !this.isUser;
      this.isAdmin = false;
      this.isGuest = false;
    }
    if (mje === 'admin') {
      this.isAdmin = !this.isAdmin;
      this.isUser = false;
      this.isGuest = false;
    }
    if (mje === 'guest') {
      this.isGuest = !this.isGuest;
      this.isUser = false;
      this.isAdmin = false;
    }
  }

  loading : boolean = true;

  constructor(private authService: AuthService,private infoServ: InformationService, private router: Router) {
    this.infoServ.getInformation().subscribe(
      () => {
        this.loading = false;
      },
      (errors) => {
        if (errors.status == 0) {
          alert('lo sentimos ha ocurrido un error en el servidor');
        }
        this.router.navigateByUrl('/')
      }
    );
  }

  ngOnInit(): void {
    
  }

  onlogOut(): void {
    this.authService.logOut();
  }
}

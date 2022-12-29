import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service.service';
import { ProyectsService } from 'src/app/services/proyects.service';
import { Proyect } from 'src/app/services/proyectsModel';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit, OnDestroy {

  constructor(private servProyects: ProyectsService, private authService:AuthService) { }

  edit? : boolean;

  private subs?: Subscription;

  ngOnInit(): void {
    this.getProyects();

    let userAuth = JSON.parse( sessionStorage.getItem('user') || '{}' );
    if (userAuth.authorities) {
      if (userAuth.authorities.length == 2) {this.edit = true}
    } 
    else {this.edit = false}
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  proyects : Proyect[] = [];

  getProyects(): void{
    this.servProyects.getProyects().subscribe((data) => {
      this.proyects = data;
    })

    this.subs?.add(
      this.servProyects.getProyects().subscribe((data) => {
        this.proyects = data;
      })
    )
  }

  mostrar = true;
  onEdit() {
    this.mostrar = !this.mostrar;
  }


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

  onlogOut(): void {
    this.authService.logOut();
  }




}

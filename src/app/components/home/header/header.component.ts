import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() propagar = new EventEmitter();

  isUser?: boolean;
  isAdmin?: boolean;
  isGuest?: boolean;

  constructor(private router : Router) {}

  ruta? : String;

  ngOnInit(): void {
    let userAuth = JSON.parse( sessionStorage.getItem('user') || '{}' );
      console.log(userAuth);
      if (userAuth.authorities) {
        if (userAuth.authorities.length == 1) {this.user()}
        if (userAuth.authorities.length == 2) {this.admin()}
      } 
      else {this.guest()}


      this.ruta = this.router.url;
  }
  

  // click en el menu haburguesa
  mostrar = true;
  onMenu() {
    this.mostrar = !this.mostrar;
  }

  // cambiar icono de perfil
  user(): void {
    this.isUser = true;
    this.isAdmin = false;
    this.isGuest = false;
  }
  admin(): void {
    this.isUser = false;
    this.isAdmin = true;
    this.isGuest = false;
  }
  guest(): void {
    this.isUser = false;
    this.isAdmin = false;
    this.isGuest = true;
  }

  // click en el icono de perfil
  onUser() {
    let user = 'user';
    this.propagar.emit(user);
  }
  onAdmin() {
    let admin = 'admin';
    this.propagar.emit(admin);
  }
  onGuest() {
    let guest = 'guest';
    this.propagar.emit(guest);
  }
}

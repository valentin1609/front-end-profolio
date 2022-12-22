import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://localhost:8080/auth";

  userlogged : BehaviorSubject<any>;

  constructor(private http : HttpClient, private router: Router) { 
    this.userlogged = new BehaviorSubject<any>(JSON.parse( sessionStorage.getItem('user')|| '{}' ));
  }



  login(credentials:any){  //el metodo espera las credenciales para pasarselas a la api
    return this.http.post(this.url + '/login', credentials)
    .pipe( map(data => {
      sessionStorage.setItem( 'user', JSON.stringify(data) );  //guarda el token en el ssesionStorage
      this.userlogged.next(data);
      
      return data;
    }));
  }

  get UsuarioAutenticado() { 
    return this.userlogged.value;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigateByUrl("/")
  }

}

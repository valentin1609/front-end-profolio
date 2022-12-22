import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var userAuth = this.authService.UsuarioAutenticado;
    if(userAuth != null) {
      console.log(req);
      req = req.clone({  //setteamos el header de la request y le agregamos el token el usuario
        setHeaders: {Authorization: `Bearer ${userAuth.token}`}
      });
    }
    console.log(userAuth);
    console.log(req);

    return next.handle(req);
  }
}

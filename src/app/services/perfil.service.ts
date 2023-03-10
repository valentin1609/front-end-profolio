import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from './perfilModel';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  url="https://porfolio-valentin1609.koyeb.app/perfil/";

  constructor(private http : HttpClient) { }

  public getPerfil(username:String): Observable <any> {
    return this.http.get<Perfil>(this.url + "get/" + username);
  }


}

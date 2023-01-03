import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './new-userModel';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  url="https://porfolio-valentin1609.koyeb.app/auth/";

  constructor(private http : HttpClient) { }

  public addUser(user: User){
    return this.http.post(this.url + "new", user)
  }
}

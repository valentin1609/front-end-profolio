import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contactModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  url="https://porfolio-valentin1609.koyeb.app/contact/";

  constructor(private http:HttpClient) { }

  public getContacts(): Observable <Contact[]> {
    return this.http.get<Contact[]>(this.url + "getAll");
  }

  public addContact(contact: Contact){
    return this.http.post(this.url + "add", contact)
  }
  
  
  public editContact(contact: Contact){
    return this.http.put<any>(this.url + "edit", contact)
  }
  
  public deleteContact(id: number){
    return this.http.delete<any>(this.url + "delete/" + `${id}`)
  }
}

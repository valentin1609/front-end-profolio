import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idiom } from './skills-idiomsModel';

@Injectable({
  providedIn: 'root'
})
export class SkillsIdiomsService {

  url="https://porfolio-valentin1609.koyeb.app/idioms/";

  constructor(private http:HttpClient) { }

  public getIdioms(): Observable <Idiom[]> {
    return this.http.get<Idiom[]>(this.url + "getAll");
  }

  public addIdiom(idiom: Idiom){
    return this.http.post(this.url + "add", idiom)
  }
  
  
  public editIdiom(idiom: Idiom){
    return this.http.put<any>(this.url + "edit", idiom)
  }
  
  public deleteIdiom(id: number){
    return this.http.delete<any>(this.url + "delete/" + `${id}`)
  }

}

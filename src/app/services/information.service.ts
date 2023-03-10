import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Information } from './informationModel';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  // url="http://localhost:8080/information/";
  url="https://porfolio-valentin1609.koyeb.app/information/";

  

  constructor(private http:HttpClient) { }
  
  public getInformation(): Observable<Information> {
    return this.http.get<Information>(this.url + "get/1");
  }
  

  public editInformation(info: any) : Observable<any> {
    return this.http.put(this.url + "edit", info)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from './educationModel';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url="https://porfolio-valentin1609.koyeb.app/education/";

  constructor(private http:HttpClient) { }

 
  public getEducationlist(): Observable <Education[]> {
    return this.http.get<Education[]>(this.url + "getAll");
  }
  
  public addEducation(education: Education){
    return this.http.post(this.url + "add", education)
  }
  
  public editEducation(education: Education){
    return this.http.put(this.url + "edit", education)
  }
  
  public deleteEducation(id: number){
    return this.http.delete(this.url + "delete/" + `${id}`)
  }


}

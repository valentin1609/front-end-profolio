import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from './experienceModel';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url="https://porfolio-valentin1609.koyeb.app/experience/";

  constructor(private http:HttpClient) { }

 
  public getExperiencelist(): Observable <Experience[]> {
    return this.http.get<Experience[]>(this.url + "getAll");
  }
  
  public addExperience(experience: Experience){
    return this.http.post(this.url + "add", experience)
  }
  
  public editExperience(experience: Experience){
    return this.http.put(this.url + "edit", experience)
  }
  
  public deleteExperience(id: number){
    return this.http.delete(this.url + "delete/" + `${id}`)
  }
}

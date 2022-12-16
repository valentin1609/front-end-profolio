import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Skills } from './skillsModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url="http://localhost:8080/skills/";

constructor(private http:HttpClient) { }

public getSkills(): Observable <Skills[]> {
  return this.http.get<Skills[]>(this.url + "getAll");
}

public addSkill(skill: Skills): Observable<any>{
  return this.http.post<any>(this.url + "add", skill)
}

// public addSkill(skill: any){
//   return this.http.post(this.url + "add", skill)
// }


public editSkill(skill: Skills): Observable<any>{
  return this.http.put<any>(this.url + "edit", skill)
}

public deleteSkill(id: number): Observable<any>{
//  return this.http.delete<any>(this.url + `delete/${id}`)
  return this.http.delete<any>(this.url + "delete/" + `${id}`)
}

}
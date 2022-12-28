import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OtherSkill } from './skills-othersModel';

@Injectable({
  providedIn: 'root'
})
export class SkillsOthersService {

  url="http://localhost:8080/other-skills/";

  constructor(private http:HttpClient) { }

  public getOtherSkills(): Observable <OtherSkill[]> {
    return this.http.get<OtherSkill[]>(this.url + "getAll");
  }

  public addOtherSkill(oskill: OtherSkill){
    return this.http.post(this.url + "add", oskill)
  }
  
  
  public editOtherSkill(oskill: OtherSkill){
    return this.http.put<any>(this.url + "edit", oskill)
  }
  
  public deleteOtherSkill(id: number){
    return this.http.delete<any>(this.url + "delete/" + `${id}`)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from './educationModel';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url="http://localhost:8080/education/";

  constructor(private http:HttpClient) { }

 
  public getEducationlist(): Observable <Education[]> {
    return this.http.get<Education[]>(this.url + "getAll");
  }
  
  public addEducation(education: Education): Observable<any>{
    return this.http.post<any>(this.url + "add", education)
  }
  
  public editEducation(education: Education): Observable<any>{
    return this.http.put<any>(this.url + "edit", education)
  }
  
  public deleteEducation(id: number): Observable<any>{
    return this.http.delete<any>(this.url + "delete/" + `${id}`)
  }


}

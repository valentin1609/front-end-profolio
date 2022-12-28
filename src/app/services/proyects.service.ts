import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from './proyectsModel';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {


  url="http://localhost:8080/proyects/";

  constructor(private http:HttpClient) { }

  public getProyects(): Observable <Proyect[]> {
    return this.http.get<Proyect[]>(this.url + "getAll");
  }

  public addProyect(proyect: Proyect){
    return this.http.post(this.url + "add", proyect)
  }
  
  
  public editProyect(proyect: Proyect){
    return this.http.put<any>(this.url + "edit", proyect)
  }
  
  public deleteProyect(id: number){
    return this.http.delete<any>(this.url + "delete/" + `${id}`)
  }
}

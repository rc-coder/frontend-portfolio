import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tecnologiasList } from '../mock-tecnologias';
import { projectList } from '../mock-projects';
import { persona } from '../mock-persona';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private databaseUrl = 'https://portfoliodb-backend.onrender.com/api/db';
  constructor(private http: HttpClient) {}
  public getPersona(): Observable<any> {
    return this.http.get<any>(this.databaseUrl + '/ver/persona');
  }
  public getProyectos(): Observable<any> {
    return this.http.get<any>(this.databaseUrl + '/ver/proyecto');
  }
  public getTecnologias(): Observable<any> {
    return this.http.get<any>(this.databaseUrl + 'ver/tecnologia');
  }
  // getTecnologias(): Tecnologia[] {
  //   return tecnologiasList;
  // }
  // getProyectos(): Project[] {
  //   return projectList;
  // }
  // getPersona(): Persona[] {
  //   return persona;
  // }
}

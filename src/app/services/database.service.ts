import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona, Project, Tecnologia } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private databaseUrl = 'https://portfoliodb-backend.onrender.com/api/db';
  // private databaseUrl = 'localhost:8080/api/db';
  constructor(private http: HttpClient) {}

  //Persona
  public getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.databaseUrl + '/ver/persona');
  }

  public editarPersona(request: any): Observable<any> {
    return this.http.put<any>(this.databaseUrl + '/editar/persona', request);
  }

  //Projects
  public getProyectos(): Observable<Project[]> {
    return this.http.get<Project[]>(this.databaseUrl + '/ver/proyecto');
  }
  public agregarProyecto(request: any): Observable<any> {
    return this.http.post<any>(this.databaseUrl + '/new/proyecto', request);
  }
  public borrarProyecto(id: number): Observable<any> {
    return this.http.delete<any>(this.databaseUrl + '/borrar/proyecto/' + id);
  }
  public editarProyecto(request: any): Observable<any> {
    return this.http.put<any>(this.databaseUrl + '/editar/proyecto', request);
  }

  //Techs
  public getTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.databaseUrl + '/ver/tecnologia');
  }
  public agregarTecnologia(request: any): Observable<any> {
    return this.http.post<any>(this.databaseUrl + '/new/tecnologia', request);
  }
  public borrarTecnologia(id: number): Observable<any> {
    return this.http.delete<any>(this.databaseUrl + '/borrar/tecnologia/' + id);
  }
  public editarTecnologia(request: any): Observable<any> {
    return this.http.put<any>(this.databaseUrl + '/editar/tecnologia', request);
  }
}

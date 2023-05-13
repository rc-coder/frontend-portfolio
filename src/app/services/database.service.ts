import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private dbUrl = '/db/find/persona/1';

  constructor(private http: HttpClient) {}

  public getPersona(): Observable<any> {
    return this.http.get<any>(this.dbUrl);
  }
}

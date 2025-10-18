import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Putnik } from '../model/putnik';

@Injectable({
  providedIn: 'root'
})
export class PutnikService {

  private apiUrl = 'http://localhost:8080/api/putnici';

  constructor(private http: HttpClient) {}

  getPutnici(): Observable<Putnik[]> {
    return this.http.get<Putnik[]>(this.apiUrl);
  }

  getPutnikById(id: number): Observable<Putnik> {
    return this.http.get<Putnik>(`${this.apiUrl}/${id}`);
  }

  addPutnik(putnik: Putnik): Observable<Putnik> {
    return this.http.post<Putnik>(this.apiUrl, putnik);
  }

  updatePutnik(id: number, putnik: Putnik): Observable<Putnik> {
    return this.http.put<Putnik>(`${this.apiUrl}/${id}`, putnik);
  }

  deletePutnik(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

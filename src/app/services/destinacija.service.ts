import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destinacija } from '../model/destinacija';

@Injectable({
  providedIn: 'root'
})
export class DestinacijaService {

  private apiUrl = 'http://localhost:8080/api/destinacije';

  constructor(private http: HttpClient) {}

  getDestinacije(): Observable<Destinacija[]> {
    return this.http.get<Destinacija[]>(this.apiUrl);
  }

  getDestinacijaById(id: number): Observable<Destinacija> {
    return this.http.get<Destinacija>(`${this.apiUrl}/${id}`);
  }

  addDestinacija(destinacija: Destinacija): Observable<Destinacija> {
    return this.http.post<Destinacija>(this.apiUrl, destinacija);
  }

  updateDestinacija(id: number, destinacija: Destinacija): Observable<Destinacija> {
    return this.http.put<Destinacija>(`${this.apiUrl}/${id}`, destinacija);
  }

  deleteDestinacija(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

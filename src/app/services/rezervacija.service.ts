import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rezervacija } from '../model/rezervacija';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {

  private baseUrl = 'http://localhost:8080/api/rezervacije';

  constructor(private http: HttpClient) {}

  getRezervacije(): Observable<Rezervacija[]> {
    return this.http.get<Rezervacija[]>(this.baseUrl);
  }

  addRezervacija(rezervacija: Rezervacija): Observable<Rezervacija> {
    return this.http.post<Rezervacija>(this.baseUrl, rezervacija);
  }

  updateRezervacija(id: number, rezervacija: Rezervacija): Observable<Rezervacija> {
    return this.http.put<Rezervacija>(`${this.baseUrl}/${id}`, rezervacija);
  }

  deleteRezervacija(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

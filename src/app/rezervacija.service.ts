import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {
  private apiUrl = 'http://localhost:8080/rezervacije'; // endpoint backend-a

  constructor(private http: HttpClient) {}

  getRezervacije(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

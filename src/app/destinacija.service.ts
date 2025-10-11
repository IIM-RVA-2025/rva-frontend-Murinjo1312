import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinacijaService {
  private apiUrl = 'http://localhost:8080/destinacije'; // backend endpoint

  constructor(private http: HttpClient) {}

  getDestinacije(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

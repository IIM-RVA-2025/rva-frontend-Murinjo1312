import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AranzmanService {
  private apiUrl = 'http://localhost:8080/api/aranzmani'; // endpoint iz backenda

  constructor(private http: HttpClient) {}

  getAranzmani(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

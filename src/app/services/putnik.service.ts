import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutnikService {
  private apiUrl = 'http://localhost:8080/putnici';

  constructor(private http: HttpClient) { }

  getPutnici(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:4242/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //Data user instead of any?
  signup(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/signup`,data)
  }

  signin(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/signin`,data)
  }

  signout(id: Number): Observable<any> {
    return this.http.post(`${baseUrl}/signout`,id)
  }
}


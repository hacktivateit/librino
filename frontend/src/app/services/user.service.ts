import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {User} from '../models/user.model';
import {Book} from '../models/book.model';

interface Response { data: Book[] }
const baseUrl = 'http://localhost:4242/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  get(id: Number): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  getLibrary(id: Number): Observable<Book[]> {
    return this.http.get<Response>(`${baseUrl}/lib/${id}`).pipe(map(i => i.data))
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: Number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}


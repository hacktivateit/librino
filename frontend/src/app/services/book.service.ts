import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from '../models/book.model';

const baseUrl = 'http://localhost:4242/api/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(baseUrl);
  }

  get(id: Number): Observable<Book> {
    return this.http.get<Book>(`${baseUrl}/${id}`);
  }

  //Will be removed with jwt
  create(id: Number, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${id}`, data);
  }

  update(id: Number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}


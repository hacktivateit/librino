import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = localStorage.getItem("auth-user");

    if (user) {
      const id = JSON.parse(user).id;
      const cloned = req.clone( {headers : req.headers.set("Authorization", "Bearer " + 42)});
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

export const authInterceptorProvider = [
  {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true},
];

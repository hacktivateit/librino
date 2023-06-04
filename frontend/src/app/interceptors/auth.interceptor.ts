import {Injectable} from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private storage: StorageService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //If User is logged in change add the token (id) to the header
    if (this.storage.isLoggedIn()){
      const id = this.storage.getUser().id;
      const cloned = req.clone({
        headers : req.headers.set("Authorization", id.toString())
        });
      console.log("id added to the request");
      return next.handle(cloned);
    } else {
      console.log("request unchanged");
      return next.handle(req);
    }
  }
}

export const authInterceptorProvider = [
  {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true},
];

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      const user = localStorage.getItem("auth-user");

      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.id) {
          const id = parsedUser.id;
          const cloned = req.clone(
              {headers : req.headers.set("Authorization", "Bearer " + id)});

          return next.handle(cloned);
        }
      }
    } catch (error) {
      console.error("Error retrieving user from local storage:", error);
    }

    return next.handle(req);
  }
}

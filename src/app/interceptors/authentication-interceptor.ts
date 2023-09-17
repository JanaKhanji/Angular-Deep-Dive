import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthnticationInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (user.isAuthenticated) {
      const requestWithAuthentication = request.clone({
        setHeaders: {
          Authorization: `${user.token}`,
        },
      });
      return next.handle(requestWithAuthentication);
    }
    return next.handle(request);
  }
}

const user = {
  isAuthenticated: true,
  token: '1233',
};

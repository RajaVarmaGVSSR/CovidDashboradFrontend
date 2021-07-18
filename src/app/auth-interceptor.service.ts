import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if(req.url === "http://localhost:4200/api/covidcases") {
      const modifiedreq = req.clone({params: new HttpParams().set('auth', localStorage.getItem("token"))});
      return next.handle(modifiedreq);
    }


    return next.handle(req);
  }
}

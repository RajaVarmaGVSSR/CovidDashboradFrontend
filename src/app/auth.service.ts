import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throws } from 'assert';
import { Route, Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({providedIn: 'root'})
export class AuthService {

  user = new BehaviorSubject<User>(null);

  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  isLogged = false;

  token: string = null;

  signup(user) {
    return this.http.post('/api/addUser', user);
  }

  login(username: string, password: string) {
    const loginDetails = { username: username, password: password };
    this.http.post("/api/login",loginDetails,{observe: 'response'}).subscribe(
      (res: any) => {
        console.log(res);
        this.token = res.headers.get('Authorization');
        this.token = this.token.slice(7);

        this.isLogged = true;
        const decodedToken = this.helper.decodeToken(this.token);
        const email = decodedToken.sub;
        const authority = decodedToken.authorities[0].authority;
        const user = new User(email, this.token, authority);
        localStorage.setItem('userDetails', JSON.stringify(user));
        console.log(decodedToken);
        console.log(user);
        this.user.next(user);
        this.router.navigate(['/']);

      },
      (err) => {
        console.log(err);
      }
    )
  };


}

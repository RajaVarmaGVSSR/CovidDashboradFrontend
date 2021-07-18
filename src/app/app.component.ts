import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid-info-dashboard';

  constructor(private authService: AuthService) {};

  ngOnInit() {
    const token: string = localStorage.getItem('token');
    if(token!=null) {
      this.authService.isLogged = true;
      this.authService.token = token;
    }

    const user = JSON.parse(localStorage.getItem('userDetails'));
    if(!user) {
      return;
    }
    this.authService.user.next(user);

  }
}

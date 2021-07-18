import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userSub: Subscription;

  user: User;

  constructor(private authService: AuthService, private changeDetector: ChangeDetectorRef, private router: Router) { }

  isLogged: boolean = false;

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
       this.isLogged = !!user;
       this.user = user;
    });
  }

  logout() {
    localStorage.clear();
    this.authService.isLogged = false;
    this.authService.user.next(null);
    this.changeDetector.detectChanges();
    this.router.navigate(["/"]);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}

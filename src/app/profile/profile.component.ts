import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subject, Subscription } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private userSub: Subscription;
  public user: User
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

}

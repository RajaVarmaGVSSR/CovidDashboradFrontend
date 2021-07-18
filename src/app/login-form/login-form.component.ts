import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { throws } from 'assert';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService, private changeDetector: ChangeDetectorRef) { }

  login(form: NgForm) {
    this.authService.login(form.value.username, form.value.password);
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
  }
}

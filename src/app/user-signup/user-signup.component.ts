import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DistrictService } from '../district-controller/district.service';
import { StateService } from '../state.service';
import { State } from '../state.model';
import { District } from '../district-controller/district.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SignUpDetails } from './signup-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  public states: State[];

  public districts: District[];


  constructor(private districtService: DistrictService, private stateService: StateService, private changeDetector: ChangeDetectorRef, private authService: AuthService, private router: Router) { }

  hide = true;

  onChange(state_id) {
    this.districtService.getDistrictByState(state_id.value).subscribe((res:any)=> {
      console.log(res);
      this.districts = [...res];
      this.changeDetector.detectChanges();
    },
    (err: any)=> {
      console.log(err);
    }
    )
  }

  signup(signupform: NgForm) {
    console.log(signupform);
    const signUpDetails: SignUpDetails = {id: null, username: signupform.value.username, password: signupform.value.password, gender: signupform.value.gender, age: signupform.value.age, state_id: signupform.value.state_id, district_id: signupform.value.district_id, name: signupform.value.name };
    this.authService.signup(signUpDetails).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    },
    (err) => {
      console.log(err);
    }
    )


  }

  ngOnInit(): void {
    this.stateService.getStates().subscribe((res:any)=> {
      console.log(res);
      this.states = [...res];
      this.changeDetector.detectChanges();
    },
    (err: any)=> {
      console.log(err);
    }
    )
  }

}

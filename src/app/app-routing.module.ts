import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictControllerComponent } from './district-controller/district-controller.component';
import { StateControllerComponent } from './state-controller/state-controller.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDataComponent } from './admin-data/admin-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'addDistrict', component: DistrictControllerComponent },
  { path: 'addState', component: StateControllerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'admin', component: AdminReportComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'adminData', component: AdminDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

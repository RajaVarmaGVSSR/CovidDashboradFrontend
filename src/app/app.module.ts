import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartModule} from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatTableModule} from '@angular/material/table';

import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';


import {CardModule} from 'primeng/card';

import { StateControllerComponent } from './state-controller/state-controller.component';
import { StateService } from './state.service';
import { DistrictControllerComponent } from './district-controller/district-controller.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { PatientComponent } from './patient/patient.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { NewTestComponent } from './new-test/new-test.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AdminDataComponent } from './admin-data/admin-data.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StateControllerComponent,
    DistrictControllerComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    PatientComponent,
    AdminReportComponent,
    UserSignupComponent,
    NewTestComponent,
    LoginFormComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    AdminDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTabsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    CardModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [StateService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

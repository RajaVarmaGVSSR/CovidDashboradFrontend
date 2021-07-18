import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../state.model';
import { District } from '../district-controller/district.model';
import { Patient } from './patient.model';
import { TestService } from '../admin-report/test-report.service';



@Injectable({providedIn: 'root'})
export class PatientService {
  name: string;
  gender: string;
  age: number;
  state_id: number;
  district_id: number;

  patientId: number;

  email: string;


  constructor(private http: HttpClient, private testService: TestService) {}

  addPatient(name: string, gender: string, age: number, state_id: number, district_id: number, email: string) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.state_id = state_id;
    this.district_id = district_id;
    this.email = email;
    //console.log(this.name,this.gender, this.age, this.state_id, this.district_id);
    const patientToBeAdded = {id:null, name:this.name, gender: this.gender, age: this.age, state_id: this.state_id, district_id: this.district_id, email: this.email};
    console.log(patientToBeAdded);
    return this.http.post('/api/patient/addPatient', patientToBeAdded);


  }

  getPatients() {
    return this.http.get("/api/patient/getPatients");
  }

}

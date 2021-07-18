import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../state.model';
import { District } from '../district-controller/district.model';
import { Patient } from '../patient/patient.model';



@Injectable({providedIn: 'root'})
export class TestService {

  pid: number;

  constructor(private http: HttpClient) {}

  addTest(pid: number) {
    this.pid = pid;
    console.log(this.pid);

    return this.http.post('/api/covidtest/addTest', this.pid)

  }

  getTests() {
    return this.http.get("/api/covidtest/getTest");
  }

  updateTest(id: number, status: string) {
    const obj = { id: id, result: status };
    return this.http.post('/api/covidtest/update',obj);

  }

  sendMail(obj: any) {
    return this.http.post("/api/covidtest/mail",obj);
  }

}

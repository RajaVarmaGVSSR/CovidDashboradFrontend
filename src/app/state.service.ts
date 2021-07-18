import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from './state.model';


@Injectable({providedIn: 'root'})
export class StateService {
  States : State[];
  stateName : string;
  stateCode : string;

  constructor(private http: HttpClient) {
    this.States = [];
  }

  addState (name: string, stateCode: string) {
    this.stateName = name;
    this.stateCode = stateCode;
    const stateToBeAdded = {id:null, name:this.stateName,code:this.stateCode};
    //console.log("test");
    this.http.post('/api/state/addState', stateToBeAdded)
    .subscribe((res: any) => {
      console.log(res);},
    (err: any) => {
      console.log(err);
    })
  }


  getStates() {
    return this.http.get('/api/states');
  }



}

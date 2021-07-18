import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../state.model';
import { District } from './district.model';


@Injectable({providedIn: 'root'})
export class DistrictService {
  Districts: District[];
  name: string;
  total: number;
  recovered: number;
  active: number;
  state_id: number;
  States: State[];
  deceased: number;

  constructor(private http: HttpClient) {
    this.Districts = [];
  }

  addDistrict(name: string, total: number, recovered: number, active: number, stateId: number, deceased: number) {
    this.name = name;
    this.total = total;
    this.recovered = recovered;
    this.active = active;
    this.state_id = stateId;
    this.deceased = deceased;

    const districtToBeAdded = {id:null, name:this.name, total:this.total, recovered:this.recovered, active:this.active, state_id:this.state_id, deceased:this.deceased};

    this.http.post('/api/district/addDistrict', districtToBeAdded)
    .subscribe((res: any) => {
      console.log(res);},
    (err: any) => {
      console.log(err);
    })
  }

  getDistricts() {
    return this.http.get('/api/districts');
  }

  getDistrictByState(state_id) {
    console.log(state_id);
    return this.http.get(`/api/districtsByState?state_id=${state_id}`);
  }



}

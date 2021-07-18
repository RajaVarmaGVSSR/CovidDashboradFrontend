import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '../state.service';
import { State } from '../state.model';
import { DistrictService } from '../district-controller/district.service';
import { District } from '../district-controller/district.model';
import { PatientService } from './patient.service';
import { TestService } from '../admin-report/test-report.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  public states: State[];

  public districts: District[];

  patientId: number;

  constructor(private districtService: DistrictService, private stateService: StateService, private changeDetector: ChangeDetectorRef, private patientService: PatientService, private testService: TestService) { }

  onChange(state_id) {
    if(state_id.value == null) {
      return;
    }
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

  addPatient(form:NgForm) {

    this.patientService.addPatient(form.value.patientName,form.value.patientGender, form.value.patientAge,form.value.state_id, form.value.district_id, form.value.patientEmail)
    .subscribe((res: any) => {
      console.log(res);
      this.testService.addTest(res)
      .subscribe((res1: any) => {
        console.log(res1);
        console.log(form.value.patientName,form.value.patientGender, form.value.patientAge,form.value.state_id, form.value.district_id);
        form.reset();},
      (err: any) => {
        console.log(err);
      })
    },
    (err: any) => {
      console.log(err);
    });

  }



  ngOnInit(): void {
    this.stateService.getStates().subscribe((res: any) => {
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

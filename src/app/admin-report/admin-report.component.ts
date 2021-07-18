import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { TestService } from './test-report.service';
import { TestReport } from './test-report.model';
import { NgForm } from '@angular/forms';
import { PatientService } from '../patient/patient.service';
import { DistrictService } from '../district-controller/district.service';
import { StateService } from '../state.service';
import { Patient } from '../patient\/patient.model';
import { State } from '../state.model';
import { District } from '../district-controller/district.model';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

  tests: TestReport[] = [];
  patients: Patient[] = [];
  states: State[] = [];
  districts: District[] = [];

  constructor(private testService: TestService, private changeDetector: ChangeDetectorRef, private patientService: PatientService, private districtService: DistrictService, private stateService: StateService) { }

  updateTest(test_id, status, email) {
    console.log(test_id);
    console.log(status);
    this.testService.updateTest(test_id, status.value)
    .subscribe((res) =>
    {
      console.log(res);
      this.sendReport(test_id,email);
      this.changeDetector.detectChanges();
      this.ngOnInit();
    },
    (err) => {
      console.log(err);
    }
    );
  }

  sendReport(test_id: number,email: string) {

    const obj = {id: test_id, email: email};
    this.testService.sendMail(obj)
    .subscribe((res) =>
    {
      console.log(test_id,email);
      console.log(res);
      this.changeDetector.detectChanges();
    },
    (err) => {
      console.log(err);
    }
    );

  }

  ngOnInit(): void {
    this.testService.getTests().subscribe((res: any) => {
      console.log(res);
      this.tests = [...res];
      this.changeDetector.detectChanges();
    },
    (err) => {
      console.log(err);
    })

    this.patientService.getPatients().subscribe((res: any) => {
      console.log(res);
      this.patients = [...res];
      this.changeDetector.detectChanges();
    },
    (err) => {
      console.log(err);
    })

    this.stateService.getStates().subscribe((res: any) => {
      console.log(res);
      this.states = [...res];
      this.changeDetector.detectChanges();
    },
    (err) => {
      console.log(err);
    })

    this.districtService.getDistricts().subscribe((res: any) => {
      console.log(res);
      this.districts = [...res];
      this.changeDetector.detectChanges();
    },
    (err) => {
      console.log(err);
    })


  }

}

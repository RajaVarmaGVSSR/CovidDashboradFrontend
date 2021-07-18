import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '../state.service';
import { State } from '../state.model';
import { DistrictService } from './district.service';
import { District } from './district.model';


@Component({
  selector: 'app-district-controller',
  templateUrl: './district-controller.component.html',
  styleUrls: ['./district-controller.component.css']
})
export class DistrictControllerComponent implements OnInit {

  public states: State[];

  public districts: District[];

  constructor(private districtService: DistrictService, private stateService: StateService, private changeDetector: ChangeDetectorRef) { }

  addDistrict(form:NgForm) {

    this.districtService.addDistrict(form.value.districtName, form.value.total, form.value.recovered, form.value.active, form.value.state_id, form.value.deceased);
    form.reset();
  }


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

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { State } from '../state.model';
import { District } from '../district-controller/district.model';
import { DistrictService } from '../district-controller/district.service';
import { StateService } from '../state.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  states: State[] = [];
  districts: District[] = [];
  active: number = 0;
  confirmed: number = 0;
  recovered: number = 0;
  deceased: number = 0;
  temp: number;
  displayedColumns: string[] = ['id', 'name', 'total', 'active', 'recovered', 'deceased'];
  selectedState: number = 0;

  pieData: any;
  pieLabels: string[] = [];
  pieBackgroundColor: string[] = [];
  pieConfirmedCasesData: number[] = [];

  constructor(private districtService: DistrictService, private changeDetector: ChangeDetectorRef, private stateService: StateService) { }






  onChange(state_id) {
    console.log(state_id);
    this.selectedState = state_id;
    this.fillDistrictData();
    this.fillData();
    this.changeDetector.detectChanges();
  }

  setBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
  }

  fillData() {
    this.active = 0;
    this.recovered = 0;
    this.confirmed = 0;
    this.deceased = 0;
    this.pieData = [];
    this.pieLabels = [];
    this.pieBackgroundColor = [];
    this.pieConfirmedCasesData = [];
    for (this.temp = 0; this.temp < this.districts.length; this.temp++) {
      if(this.selectedState === 0) {
      this.active = this.active +  this.districts[this.temp].active;
      this.confirmed = this.confirmed + this.districts[this.temp].total;
      this.recovered = this.recovered + this.districts[this.temp].recovered;
      this.deceased = this.deceased + this.districts[this.temp].deceased;
      }
      else {
        if(this.districts[this.temp].state.id===this.selectedState) {
          this.active = this.active +  this.districts[this.temp].active;
        this.confirmed = this.confirmed + this.districts[this.temp].total;
        this.recovered = this.recovered + this.districts[this.temp].recovered;
        this.deceased = this.deceased + this.districts[this.temp].deceased;
        }
      }
      this.pieConfirmedCasesData.push(this.districts[this.temp].total);
      this.pieLabels.push(this.districts[this.temp].name);
      this.pieBackgroundColor.push(this.setBg());
      console.log("Pie Labels");
      console.log(this.pieConfirmedCasesData.length);
    }


    this.pieData = {
      labels: this.pieLabels,
      datasets: [
        {
          data: this.pieConfirmedCasesData,
          backgroundColor: this.pieBackgroundColor,
          hoverBackgroundColor: this.pieBackgroundColor
        }
      ]
    };

  }

  clearState(form: NgForm) {
    console.log(form.value);
    this.selectedState = 0;
    this.districts = [];
    this.fillData();
    form.reset();
    this.changeDetector.detectChanges();
  }

  fillDistrictData() {
    if(this.selectedState==0) {
      this.districtService.getDistricts().subscribe((res:any) => {
        console.log(res);
        this.districts = [...res];
        this.fillData();

        this.changeDetector.detectChanges();
      },
      (err) => {
        console.log(err);
      });

    }
    else {
      this.districtService.getDistrictByState(this.selectedState).subscribe((res:any) => {
        console.log(res);
        this.districts = [...res];
        this.fillData();
        this.changeDetector.detectChanges();
      },
      (err) => {
        console.log(err);
      });

    }
  }


  ngOnInit(): void {

    //this.fillDistrictData();

    this.stateService.getStates().subscribe((res:any) => {
      this.states = [...res];
      this.changeDetector.detectChanges();
    },
    (err) => {
      console.log(err);
    })




  }

}

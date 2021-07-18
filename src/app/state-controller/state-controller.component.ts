import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '../state.service';
import { State } from '../state.model';

@Component({
  selector: 'app-state-controller',
  templateUrl: './state-controller.component.html',
  styleUrls: ['./state-controller.component.css']
})
export class StateControllerComponent implements OnInit {

  constructor(private stateService: StateService) { }

  addState(form:NgForm) {

      this.stateService.addState(form.value.stateName, form.value.stateCode);
      form.reset();

  }

  ngOnInit(): void {
  }

}

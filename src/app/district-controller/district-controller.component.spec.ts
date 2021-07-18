import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictControllerComponent } from './district-controller.component';

describe('DistrictControllerComponent', () => {
  let component: DistrictControllerComponent;
  let fixture: ComponentFixture<DistrictControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPrecriptionComponent } from './patient-precription.component';

describe('PatientPrecriptionComponent', () => {
  let component: PatientPrecriptionComponent;
  let fixture: ComponentFixture<PatientPrecriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientPrecriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientPrecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

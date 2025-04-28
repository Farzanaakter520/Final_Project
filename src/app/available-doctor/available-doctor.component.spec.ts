import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDoctorComponent } from './available-doctor.component';

describe('AvailableDoctorComponent', () => {
  let component: AvailableDoctorComponent;
  let fixture: ComponentFixture<AvailableDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

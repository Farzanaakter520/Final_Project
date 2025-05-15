import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPatientListComponent } from './total-patient-list.component';

describe('TotalPatientListComponent', () => {
  let component: TotalPatientListComponent;
  let fixture: ComponentFixture<TotalPatientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalPatientListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

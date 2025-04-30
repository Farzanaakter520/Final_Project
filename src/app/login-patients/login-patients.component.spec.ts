import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPatientsComponent } from './login-patients.component';

describe('LoginPatientsComponent', () => {
  let component: LoginPatientsComponent;
  let fixture: ComponentFixture<LoginPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

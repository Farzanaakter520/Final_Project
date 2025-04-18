import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPharmacyComponent } from './navbar-pharmacy.component';

describe('NavbarPharmacyComponent', () => {
  let component: NavbarPharmacyComponent;
  let fixture: ComponentFixture<NavbarPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPharmacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

import { GeneratePrescriptionComponent } from "../generate-prescription/generate-prescription.component";

@Component({
  selector: 'app-doctor-dashboard',
  imports: [NavbarComponent, GeneratePrescriptionComponent],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent {

}

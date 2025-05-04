import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { GeneratePrescriptionComponent } from "../generate-prescription/generate-prescription.component";

@Component({
  selector: 'app-doctor-dashboard',
  imports: [NavbarComponent, DashboardComponent, GeneratePrescriptionComponent],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorDashboardComponent } from "../doctor-dashboard/doctor-dashboard.component";

@Component({
  selector: 'app-generate-prescription',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './generate-prescription.component.html',
  styleUrl: './generate-prescription.component.css'
})
export class GeneratePrescriptionComponent {
  prescriptionForm: FormGroup;

  investigation1 = 'Blood Test';
  advice = 'Take proper rest and maintain a healthy diet.';
  followUpDate = '2025-05-15';

  constructor(private fb: FormBuilder) {
    this.prescriptionForm = this.fb.group({
      prescriptionId: [''],
      patientName: [''],
      doctorId: [''],
      medicineName: [''],
      dosage: [''],
      duration: ['']
    });
  }

  
}



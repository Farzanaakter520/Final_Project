import { Component } from '@angular/core';
import { PrescriptionService } from '../../services/prescription.service';
import { FormsModule } from '@angular/forms';
import { Prescription } from '../../models/prescription';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-prescription',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent {

  prescriptions = {
    patientId: null,
    doctorId: null,
    description: '',
    prescription_date: ''
  };


  prescription: Prescription = new Prescription();

  constructor(private prescriptionService: PrescriptionService) { }


  onSubmit() {
    this.prescriptionService.createPrescription(this.prescription).subscribe({
      next: response => {
        console.log('Prescription saved:', response);
        alert('Prescription created successfully!');
      },
      error: error => {
        console.error('Error:', error);
        alert('Error creating prescription.');
      }
    });
  }
}

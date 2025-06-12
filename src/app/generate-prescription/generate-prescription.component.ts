import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PrescriptionService } from '../services/prescription.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { PrescriptionReceived, User } from '../models/user';
import { UserService } from '../services/user.service';
import { Prescription } from '../models/prescription';

@Component({
  selector: 'app-generate-prescription',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './generate-prescription.component.html',
  styleUrl: './generate-prescription.component.css'
})
export class GeneratePrescriptionComponent implements OnInit {
  prescriptions: PrescriptionReceived[] = [];
  doctor: User[] = [];
  patient: User[] = [];

  prescription = {
    prescriptionId: '',
    patientName: '',
    doctorId: '',
    medicines: [
      { name: '', dosage: '', duration: '' }
    ],
    tests: [
      { name: '' }
    ],
    advice: '',
    date: ''
  };

  constructor(
    private router: Router,
    private presService: PrescriptionService,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.getAllPrescriptions();
    this.getDoctors();
    this.getPatients();
  }

  getPatients() {
    this.userService.getUserByRole('PATIENT').subscribe((data) => {
      this.patient = data;
    })
  }

  getDoctors() {
    this.userService.getUserByRole('DOCTOR').subscribe((data) => {
      this.doctor = data;
    })
  }

  getAllPrescriptions() {
    this.presService.getAllPrescriptions().subscribe((data) => {
      this.prescriptions = data;
    })
  }

  addMedicine() {
    this.prescription.medicines.push({ name: '', dosage: '', duration: '' });
  }

  removeMedicine(index: number) {
    if (this.prescription.medicines.length > 1) {
      this.prescription.medicines.splice(index, 1);
    }
  }

  addTest() {
    this.prescription.tests.push({ name: '' });
  }

  removeTest(index: number) {
    if (this.prescription.tests.length > 1) {
      this.prescription.tests.splice(index, 1);
    }
  }

  formatMedicines(medicinesArray: { name: string, dosage: string, duration: string }[]): string {
    return medicinesArray
      .filter(med => med.name && med.dosage && med.duration)
      .map(med => `${med.name}, ${med.dosage}, ${med.duration}`)
      .join('; ');
  }

  formatTests(testsArray: { name: string }[]): string {
    return testsArray
      .filter(test => test.name)
      .map(test => test.name)
      .join('; ');
  }


  onSubmit(form: any) {
    if (form.valid) {

      let formattedPrescription = new Prescription();

      formattedPrescription.prescriptionId = 0 // Number(this.prescription.prescriptionId);
      formattedPrescription.doctor_id = Number(this.prescription.doctorId);
      // formattedPrescription.patient_id = this.prescription.patientId;
      formattedPrescription.patientName = this.prescription.patientName;
      formattedPrescription.medicines = this.formatMedicines(this.prescription.medicines);
      formattedPrescription.tests = this.formatTests(this.prescription.tests);
      formattedPrescription.advice = this.prescription.advice;
      formattedPrescription.prescriptionDate = new Date().toISOString();
      // debugger;

      this.presService.createPrescription(formattedPrescription).subscribe(
        res => {
          console.log('Prescription saved', res);

          form.resetForm();

          // Reset prescription object
          this.prescription = {
            prescriptionId: '',
            patientName: '',
            doctorId: '',
            medicines: [{ name: '', dosage: '', duration: '' }],
            tests: [{ name: '' }],
            advice: '',
            date: ''
          };
        },
        err => {
          console.error('Error saving prescription', err);
        }
      );

    } else {
      console.warn('Form is invalid');
    }
  }

  deletePrescription(index: number) {
    this.prescriptions.splice(index, 1);
  }
}



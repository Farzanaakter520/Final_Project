
import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PrescriptionService } from '../services/prescription.service';
import { NavbarComponent } from "../navbar/navbar.component";
import {  User } from '../models/user';
import { UserService } from '../services/user.service';
import { Prescription } from '../models/prescription';
import { MedicinePrescription } from '../models/medicine';



@Component({
  selector: 'app-generate-prescription',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NgFor, NavbarComponent],
  templateUrl: './generate-prescription.component.html',
  styleUrl: './generate-prescription.component.css'
})
export class GeneratePrescriptionComponent implements OnInit {
  
  prescriptions: Prescription[] = [];
  doctor: User[] = [];
  patient: User[] = [];

  prescription = {
    prescriptionId: '',
    patientName: '',
    patientId: '',
    doctorId: '',
    medicines: [{ name: '', dosage: '', duration: '' }],
    tests: [{ name: '' }],
    advice: '',
    date: ''
  };

  constructor(
    private router: Router,
    private presService: PrescriptionService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getDoctors();
    this.getPatients();
    this.getAllPrescriptions();
  }

  getDoctors() {
    this.userService.getUserByRole('DOCTOR').subscribe((data) => {
      this.doctor = data;
    });
  }

  getPatients() {
    this.userService.getUserByRole('PATIENT').subscribe((data) => {
      this.patient = data;
    });
  }

  getAllPrescriptions() {
    this.presService.getAllPrescriptions().subscribe((data: any[]) => {
      this.prescriptions = data.map(item => new Prescription(
        item.prescriptionId,
        item.doctor?.id || 0,
        item.doctor?.name || "",
        item.patient?.id || 0,
        item.patient?.name || "",
        item.medicines || "",
        item.tests || "",
        item.advice || "",
        item.prescriptionDate || ""
      ));
    });
  }


  addMedicine() {
    this.prescription.medicines.push({ name: '', dosage: '', duration: '' });
  }

  removeMedicine(index: number) {
    this.prescription.medicines.splice(index, 1);
  }

  addTest() {
    this.prescription.tests.push({ name: '' });
  }

  removeTest(index: number) {
    this.prescription.tests.splice(index, 1);
  }

  formatMedicines(medicines: MedicinePrescription[]): string {
    return medicines
      .filter((med) => med.name && med.dosage && med.duration)
      .map((med) => `${med.name} (${med.dosage} for ${med.duration})`)
      .join('; ');
  }

  formatTests(tests: { name: string }[]): string {
    return tests.filter((test) => test.name).map((test) => test.name).join(', ');
  }




  onSubmit(form: any) {
    if (form.valid) {
      let formattedPrescription = new Prescription();

      formattedPrescription.prescriptionId = 0 // Number(this.prescription.prescriptionId);
      formattedPrescription.doctorId = Number(this.prescription.doctorId);
      //  patient_id: Number(this.prescription.patientId),
      formattedPrescription.patientId = Number(this.prescription.patientId);
      formattedPrescription.patientName = this.prescription.patientName;
      formattedPrescription.medicines = this.formatMedicines(this.prescription.medicines);
      formattedPrescription.tests = this.formatTests(this.prescription.tests);
      formattedPrescription.advice = this.prescription.advice;
      formattedPrescription.prescriptionDate = new Date().toISOString();

      // const formattedPrescription = {
      //   doctor_id: Number(this.prescription.doctorId),

      //   patient_id: Number(this.prescription.patientId),
      //   patientName: this.prescription.patientName,
      //   medicines: this.formatMedicines(this.prescription.medicines),
      //   tests: this.formatTests(this.prescription.tests),
      //   advice: this.prescription.advice,
      //   prescriptionDate: new Date().toISOString()
      // };

      this.presService.createPrescription(formattedPrescription).subscribe(
        () => {
          alert('Prescription saved successfully!');
          form.resetForm();
          this.prescription = {
            prescriptionId: '',
            patientName: '',
            patientId: '',
            doctorId: '',
            medicines: [{ name: '', dosage: '', duration: '' }],
            tests: [{ name: '' }],
            advice: '',
            date: ''
          };
        },
        (error) => {
          console.error('Error saving prescription:', error);
          alert('Failed to save prescription. Please try again.');
        }
      );
    } else {
      alert('Please fill out all required fields.');
    }
  }

  deletePrescription(prescriptionId: number): void {
    if (!prescriptionId) {
      alert('Invalid Prescription ID!');
      return;
    }

    const confirmDelete = confirm('Are you sure you want to delete this prescription?');
    if (confirmDelete) {
      this.presService.deletePrescription(prescriptionId).subscribe(
        () => {
          // Filter out the deleted prescription from the list
          this.prescriptions = this.prescriptions.filter(
            (prescription) => prescription.prescriptionId !== prescriptionId
          );

          alert('Prescription deleted successfully!');
        },
        (error) => {
          console.error('Error deleting prescription:', error);
          alert('Failed to delete prescription. Please try again.');
        }
      );
    }
  }
}

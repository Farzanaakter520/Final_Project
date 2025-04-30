import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../app.component';  // Ensure the import path is correct
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-patient-information',
  imports: [FormsModule, NavbarComponent],
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.css']
})
export class PatientInformationComponent {
  patients: Patient = new Patient('','',0,'','','','','','');
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['patient']) {
      this.patients = nav.extras.state['patient'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    console.log('patient-informationComponent');
    if (!localStorage.getItem('patients')) {
      localStorage.setItem('patients', JSON.stringify([])); // Initialize empty patients array if none exists
    }
  }

  generateUniqueId(): string {
    return uuidv4(); // Generate unique ID using UUID
  }

  onSubmit() {
    let patients: Patient[] = JSON.parse(localStorage.getItem('patients') || '[]');

    // If it's a new patient, generate a unique ID
    if (!this.isUpdate) {
      this.patients.id = this.generateUniqueId(); // Assign unique ID to the new patient
    }

    if (this.isUpdate) {
      // If it's an update, replace the existing patient with the updated one
      patients = patients.map((patient) => (patient.id === this.patients.id ? this.patients : patient));
    } else {
      // If it's a new patient, push it to the list
      patients.push(this.patients);
    }

    // Save the updated patients list back to localStorage
    localStorage.setItem('patients', JSON.stringify(patients));

    // Reset the form after submission
    this.patients = new Patient('','',0,'','','','','','');

    // Navigate back to the patient list page
    //this.router.navigate(['/list']);
    alert('Patient Information Saved Successfully');
  }

  
}
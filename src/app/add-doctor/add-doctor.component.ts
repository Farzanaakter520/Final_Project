import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Doctor } from '../app.component';

@Component({
  selector: 'app-add-doctor',
  imports: [NavbarComponent,FormsModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
  doctors: Doctor = new Doctor('','','',0,'','','','','','');
    isUpdate = false;
  
    constructor(private router: Router) {
      const nav = this.router.getCurrentNavigation();
      if (nav?.extras.state && nav.extras.state['doctor']) {
        this.doctors = nav.extras.state['doctor'];
        this.isUpdate = true;
      }
    }
  
    ngOnInit(): void {
      console.log('patient-informationComponent');
      if (!localStorage.getItem('doctors')) {
        localStorage.setItem('doctors', JSON.stringify([])); // Initialize empty patients array if none exists
      }
    }
  
    generateUniqueId(): string {
      return uuidv4(); // Generate unique ID using UUID
    }
  
    onSubmit() {
      let doctors: Doctor[] = JSON.parse(localStorage.getItem('doctors') || '[]');
  
      // If it's a new patient, generate a unique ID
      if (!this.isUpdate) {
        this.doctors.id = this.generateUniqueId(); // Assign unique ID to the new patient
      }
  
      if (this.isUpdate) {
        // If it's an update, replace the existing patient with the updated one
        doctors = doctors.map((doctor) => (doctor.id === this.doctors.id ? this.doctors : doctor));
      } else {
        // If it's a new patient, push it to the list
        doctors.push(this.doctors);
      }
  
      // Save the updated patients list back to localStorage
      localStorage.setItem('doctors', JSON.stringify(doctors));
  
      // Reset the form after submission
      this.doctors = new Doctor('','','',0,'','','','','','');
  
      // Navigate back to the patient list page
      //this.router.navigate(['/list']);
      alert('Doctor Information Saved Successfully');
    }

}

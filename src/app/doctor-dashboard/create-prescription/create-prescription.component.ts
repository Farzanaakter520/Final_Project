import { Component } from '@angular/core';
import { PrescriptionService } from '../../services/prescription.service';
import { FormsModule } from '@angular/forms';
import { Prescription } from '../../models/prescription';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-prescription',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent {

  allPrescriptions: Prescription[] = [];
    prescriptions: Prescription = new Prescription(0, 0, 0, '', '', '', new Date());
    isEditMode: boolean = false;
    
    constructor(private router: Router) {
      const nav = this.router.getCurrentNavigation();
      if (nav?.extras.state && nav.extras.state['prescription']) {
        this.prescriptions = nav.extras.state['prescription'];
        debugger;
        this.isEditMode = true;
      }if(this.prescriptions.prescription_id == 0){
        this.isEditMode = false;
    }
    } 
    ngOnInit(): void {
      const state = history.state;
     if (state && state.prescription) {
        this.prescriptions = state.prescription;
      }
      let allPrescriptions = JSON.parse(localStorage.getItem('prescriptions') || '[]');
      this.allPrescriptions = this.allPrescriptions;
    }
  
    savePrescription(): void {
     const prescriptions = JSON.parse(localStorage.getItem('prescriptions') || '[]');
  
     if (this.isEditMode) {
       const index = prescriptions.findIndex((p: Prescription) => p.prescription_id === this.prescriptions.prescription_id);
       if (index !== -1) {
         prescriptions[index] = this.prescriptions;
       }
     } else {
       this.prescriptions.prescription_id = prescriptions.length > 0 ? Math.max(...prescriptions.map((p: Prescription) => p.prescription_id)) + 1 : 1;
       prescriptions.push(this.prescriptions);
     }
  
     localStorage.setItem('prescriptions', JSON.stringify(prescriptions));
  
   alert('Appointment Saved Successfully');
    }
  }
  
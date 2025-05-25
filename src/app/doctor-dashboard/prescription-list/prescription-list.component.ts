import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Prescription } from '../../models/prescription';
import { Router } from '@angular/router';
import { CreatePrescriptionComponent } from "../create-prescription/create-prescription.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prescription-list',
  imports: [ CreatePrescriptionComponent, NavbarComponent, CommonModule],
  templateUrl: './prescription-list.component.html',
  styleUrl: './prescription-list.component.css'
})
export class PrescriptionListComponent implements OnInit {
    prescriptions:Prescription[]=[];
  
    constructor(private router: Router) {}
    
      ngOnInit(): void {
        this.prescriptions = JSON.parse(localStorage.getItem('prescriptions') || '[]');
      }
    
      
      editPrescription(prescription: Prescription): void {
        const id = prescription.prescription_id;
        this.router.navigate(['addPrescription'], { state: { prescription } });
      }
    
      
      deletePrescription(prescription: Prescription): void {
        if (confirm('Are you sure you want to delete this prescription?')) {
          this.prescriptions = this.prescriptions.filter((p) => p.prescription_id !== prescription.prescription_id);
          localStorage.setItem('prescriptions', JSON.stringify(this.prescriptions));
        }
      }
      addNewPrescription(): void {
    this.router.navigate(['/addPrescription'], {
      state: {
        prescription: new Prescription(0, 0, 0, '', '', '', new Date())
      }
    });
  }

}
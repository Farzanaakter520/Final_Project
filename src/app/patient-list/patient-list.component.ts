import { Component, OnInit } from '@angular/core';
import { Patient } from '../app.component';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-patient-list',
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {
  patients: Patient[]=[];


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.patients = JSON.parse(localStorage.getItem('patients') || '[]');
  }

  editProducts(patient: Patient) {
    const id = patient.id;
    this.router.navigate(['/add'], { state: { patient}});
  }
  

  deleteProduct(patient: Patient) {
    //const id = product.id;
    if (confirm('Are you sure you want to delete this patient?')) {
      this.patients = this.patients.filter((p) => p !== patient);
      localStorage.setItem('patients', JSON.stringify(this.patients));
    }
  }
  addNewPatient():void{
    this.router.navigate(['/add'], { state: { patient: new Patient('','',0,'','','','','','')}});
  }

}

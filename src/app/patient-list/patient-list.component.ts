import { Component, OnInit } from '@angular/core';
import { Patient } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  imports: [],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {
  patients: Patient[]=[];


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.patients = JSON.parse(localStorage.getItem('patients') || '[]');
  }

  editProducts(product: Patient) {
    const id = product.id;
    this.router.navigate(['/add', id], { state: { product}});
  }
  

  deleteProduct(product: Patient) {
    //const id = product.id;
    if (confirm('Are you sure you want to delete this product?')) {
      this.patients = this.patients.filter((p) => p !== product);
      localStorage.setItem('patients', JSON.stringify(this.patients));
    }
  }

}

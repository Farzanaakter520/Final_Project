// import { Component, OnInit } from '@angular/core';
// import { Doctors } from '../app.component';
// import { Router } from '@angular/router';
// import { NgFor } from '@angular/common';

// @Component({
//   selector: 'app-view-doctor',
//   imports: [MatCardModule, MatButtonModule, NgFor],
//   templateUrl: './view-doctor.component.html',
//   styleUrl: './view-doctor.component.css'
// })
// export class ViewDoctorComponent implements OnInit{
  
//   aviableDoctors: Doctors[] = [];

//   constructor(private router: Router){

//   }

//   ngOnInit(): void {
    
//     let allDoctors = JSON.parse(localStorage.getItem('doctors') || '[]');
//     this.aviableDoctors = allDoctors;
//     this.aviableDoctors = this.aviableDoctors.filter(doctor => doctor.isAvailable === true);
    
//   }

//   bookAppoinment(doctor: Doctors): void {
//     this.router.navigate(['/addAppointment'], { state: { doctor: doctor } });
//   }
  



// }


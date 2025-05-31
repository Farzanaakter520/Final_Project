import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Appointment } from '../models/appointment';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {


  // appointmentForm: FormGroup;
  // appointments: any[] = [];
  // nextId = 1;

  // constructor(private fb: FormBuilder) {
  //   this.appointmentForm = this.fb.group({
  //     patientName: [''],
  //     doctorName: [''],
  //     scheduledTime: ['']
  //   });
  // }

  // submitAppointment() {
  //   const formValue = this.appointmentForm.value;

  //   const newAppointment = {
  //     id: this.nextId++,
  //     patient: { id: 0, name: formValue.patientName },
  //     doctor: { id: 0, name: formValue.doctorName },
  //     scheduledTime: formValue.scheduledTime
  //   };

  //   this.appointments.push(newAppointment);
  //   this.appointmentForm.reset();
  // }
}


//   appointments:Appointment[]=[];

//   constructor(private router: Router) {}
  
//     ngOnInit(): void {
//       this.appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
//     }
  
    
//     editAppointment(appointment: Appointment): void {
//       const id = appointment.id;
//       this.router.navigate(['addAppointment'], { state: { appointment } });
//     }
  
    
//     deleteAppointment(appointment: Appointment): void {
//       if (confirm('Are you sure you want to delete this appointment?')) {
//         this.appointments = this.appointments.filter((p) => p.id !== appointment.id);
//         localStorage.setItem('appointments', JSON.stringify(this.appointments));
//       }
//     }
//     addNewappointment(): void {
//       this.router.navigate(['/addAppointment'], { state: { appointment: new Appointment(0, '', 0, 0, '') } });
//     }
// }

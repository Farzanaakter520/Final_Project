import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  imports: [FormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent implements OnInit {
  
  allAppointments: Appointment[] = [];
  appointments: Appointment = new Appointment(0,'','','',0,0);
  isEditMode: boolean = false;
  
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['appointment']) {
      this.appointments = nav.extras.state['appointment'];
      debugger;
      this.isEditMode = true;
    }if(this.appointments.id == 0){
      this.isEditMode = false;
  }
  } 
  ngOnInit(): void {
    const state = history.state;
   if (state && state.appointment) {
      this.appointments = state.appointment;
    }
    let allAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    this.allAppointments = allAppointments;
  }

  saveAppointment(): void {
   const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');

   if (this.isEditMode) {
     const index = appointments.findIndex((p: Appointment) => p.id === this.appointments.id);
     if (index !== -1) {
       appointments[index] = this.appointments;
     }
   } else {
     this.appointments.id = appointments.length > 0 ? Math.max(...appointments.map((p: Appointment) => p.id)) + 1 : 1;
     appointments.push(this.appointments);
   }

   localStorage.setItem('appointments', JSON.stringify(appointments));
   this.router.navigate(['/appointment']);
 }
}

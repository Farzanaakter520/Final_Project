import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../app.component';

@Component({
  selector: 'app-doctors',
  imports: [],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent  {
  appointments:Appointment[]=[];

  constructor(private router: Router) {}
  
    ngOnInit(): void {
      this.appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    }
  
    
    editAppointment(appointment: Appointment): void {
      const id = appointment.id;
      this.router.navigate(['/add'], { state: { appointment } });
    }
  
    
    deleteAppointment(appointment: Appointment): void {
      if (confirm('Are you sure you want to delete this appointment?')) {
        this.appointments = this.appointments.filter((p) => p.id !== appointment.id);
        localStorage.setItem('appointments', JSON.stringify(this.appointments));
      }
    }
    addNewappointment(): void {
      this.router.navigate(['/addappointment'], { state: { appointment: new Appointment(0,'','','',0,0) } });
    }
  

}

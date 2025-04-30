import { Component, OnInit } from '@angular/core';
import { Appointment } from '../app.component';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-appointment-list',
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  appointments:Appointment[]=[];

  constructor(private router: Router) {}
  
    ngOnInit(): void {
      this.appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    }
  
    
    editAppointment(appointment: Appointment): void {
      const id = appointment.id;
      this.router.navigate(['addAppointment'], { state: { appointment } });
    }
  
    
    deleteAppointment(appointment: Appointment): void {
      if (confirm('Are you sure you want to delete this appointment?')) {
        this.appointments = this.appointments.filter((p) => p.id !== appointment.id);
        localStorage.setItem('appointments', JSON.stringify(this.appointments));
      }
    }
    addNewappointment(): void {
      this.router.navigate(['/addAppointment'], { state: { appointment: new Appointment(0,'','','',0,0) } });
    }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-appointment-form',
  imports: [FormsModule, NavbarComponent,NgIf, CommonModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent  implements OnInit {
  appointments: Appointment[] = [];
  appointment: Appointment = new Appointment();
  isUpdate: boolean = false;

  doctor!: User;
  doctors: any;
  patients: any;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.doctor = navigation?.extras.state?.['doctor'];

    if (this.doctor) {
      this.appointment.doctorId = this.doctor.id;
      // this.appointment.doctorName = `${this.doctor.firstName} ${this.doctor.lastName}`;
    } else {
      console.warn('Doctor data not found in route state.');
    }
  }

  ngOnInit(): void {
    this.decodeToken();
    this.loadAppointments();
  }

  formatDateForInput(date: Date | string): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  decodeToken() {
    const token = localStorage.getItem('access_token');
    if (token) {
      const payloadBase64 = token.split('.')[1];
      const payloadJson = atob(payloadBase64);
      const payload = JSON.parse(payloadJson);
      const userId = payload.id;
      this.appointment.patientId = userId;
    }
  }

  loadAppointments() {
    this.appointmentService.getAllAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
      },
      error: (err) => {
        console.error('Error loading appointments:', err);
      }
    });
  }

  onSubmit() {
    this.appointment.scheduledTime = this.formatDateForInput(this.appointment.scheduledTime || new Date());
    debugger
    if (this.isUpdate && this.appointment.id) {
      this.appointmentService.updateAppointment(this.appointment.id, this.appointment).subscribe({
        next: () => {
          this.loadAppointments();
          this.resetForm();
        },
        error: (err) => {
          alert('Failed to update appointment: ' + err.message);
        }
      });
    } else {
      debugger
      this.appointmentService.createAppointment(this.appointment).subscribe({
        next: (data) => {
          this.appointments.push(data);
          this.resetForm();
        },
        error: (err) => {
          alert('Failed to create appointment: ' + err.message);
        }
      });
    }
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe({
      next: () => {
        this.appointments = this.appointments.filter(a => a.id !== id);
      },
      error: (err) => {
        alert('Failed to delete appointment: ' + err.message);
      }
    });
  }

  editAppointment(appointment: Appointment) {
    this.appointment = { ...appointment };
    this.isUpdate = true;
  }

  resetForm() {
    this.appointment = new Appointment();
    this.isUpdate = false;
  }
}

//   appointments: Appointment[] = [];
//   appointment: Appointment = new Appointment(0, '', 0, 0, '');

//   isEditMode: boolean = false;

//   constructor(private appointmentService: AppointmentService,
//     private router: Router ) {
//       const nav = this.router.getCurrentNavigation();
//       if (nav?.extras.state && nav.extras.state['appointment']) {
//         this.appointments = nav.extras.state['appointment'];
//         this.isEditMode = true;
//       }
//     }

//   ngOnInit(): void {
//     this.loadAppointments();
//     this.saveAppointment();
//   }

//   saveAppointment(): void {
//     if (this.isEditMode) {
//       this.appointmentService.createAppointment(this.appointment).subscribe({
//         next: () => {
//           alert('Appointment updated successfully!');
//           this.resetForm();
//         },
//         error: err => {
//           alert('Error updating appointment');
//           console.error(err);
//         }
//       });
//     } else {
//       this.appointmentService.createAppointment(this.appointment).subscribe({
//         next: () => {
//           alert('Appointment created successfully!');
//           this.resetForm();
//         },
//         error: err => {
//           alert('Error creating appointment');
//           console.error(err);
//         }
//       });
//     }
//   }

//   loadAppointments(): void {
//     this.appointmentService.getAllAppointments().subscribe({
//       next: data => this.appointments = data,
//       error: err => console.error('Failed to load appointments', err)
//     });
//   }

//   editAppointment(appt: Appointment): void {
//     this.appointment = { ...appt };
//     this.isEditMode = true;
//   }

//   deleteAppointment(id: number): void {
//     if (confirm('Are you sure you want to delete this appointment?')) {
//       this.appointmentService.deleteAppointment(id).subscribe(() => {
//         this.loadAppointments();
//       });
//     }
//   }

//   resetForm(): void {
//     this.appointment = new Appointment(0, '', 0, 0, '');
//     this.isEditMode = false;
//     this.loadAppointments();
//   }
// }

  
//   allAppointments: Appointment[] = [];
//   appointments: Appointment = new Appointment(0,'',0 ,0 ,'');
//   isEditMode: boolean = false;
  
//   constructor(private router: Router) {
//     const nav = this.router.getCurrentNavigation();
//     if (nav?.extras.state && nav.extras.state['appointment']) {
//       this.appointments = nav.extras.state['appointment'];
//       debugger;
//       this.isEditMode = true;
//     }if(this.appointments.id == 0){
//       this.isEditMode = false;
//   }
//   } 
//   ngOnInit(): void {
//     const state = history.state;
//    if (state && state.appointment) {
//       this.appointments = state.appointment;
//     }
//     let allAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
//     this.allAppointments = allAppointments;
//   }

//   saveAppointment(): void {
//    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');

//    if (this.isEditMode) {
//      const index = appointments.findIndex((p: Appointment) => p.id === this.appointments.id);
//      if (index !== -1) {
//        appointments[index] = this.appointments;
//      }
//    } else {
//      this.appointments.id = appointments.length > 0 ? Math.max(...appointments.map((p: Appointment) => p.id)) + 1 : 1;
//      appointments.push(this.appointments);
//    }

//    localStorage.setItem('appointments', JSON.stringify(appointments));
//    //this.router.navigate(['/appointmentList']);
//  alert('Appointment Saved Successfully');
//   }


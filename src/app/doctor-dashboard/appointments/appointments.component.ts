import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-appointments',
  imports: [],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {

   allAppointments: any [] = [];
  
    constructor(private userService: UserService){}
  
  
    ngOnInit(): void {
      this.userService.getAllDoctorAppointment().subscribe(res => {
        console.log(res)
        this.allAppointments = res;
      })
    }
}

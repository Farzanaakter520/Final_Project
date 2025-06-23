import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-doctor-dashboard',
  imports: [NavbarComponent],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent {

  allAppointments: any [] = [];

  constructor(private userService: UserService){}


  ngOnInit(): void {
    this.userService.getAllDoctorAppointment().subscribe(res => {
      console.log(res)
      this.allAppointments = res;
    })
    
    
  }

}

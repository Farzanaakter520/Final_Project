import { Component, OnInit } from '@angular/core';
import { Doctor } from '../app.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-doctor',
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent implements OnInit{
 doctor: Doctor[] = [];

constructor(private router: Router, private userService: UserService) {}

ngOnInit(): void {
  this.getDoctors();
}

getDoctors() {
  this.userService.getUserByRole('DOCTOR').subscribe({
    next: (data) => {
      this.doctor = data;
      console.log(this.doctor);
    },
    error: (err) => console.error('Failed to load doctors:', err),
  });
}
}

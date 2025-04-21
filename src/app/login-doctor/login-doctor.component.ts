import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRegisterService } from '../services/login-register.service';

@Component({
  selector: 'app-login-doctor',
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './login-doctor.component.html',
  styleUrl: './login-doctor.component.css'
})
export class LoginDoctorComponent {
email: string = "";
  pass: string = "";

  constructor(
    private loginRegisterService: LoginRegisterService
  ) {}

  onSubmit() {
    if (this.loginRegisterService.login(this.email,this.pass)) {
      alert('Login successful!');
      window.location.href="/doctor";

    } else {
      alert('Login Failed! Try again...');
    }
  }

  roles = [
    { name: 'Patient', icon: 'fas fa-user-graduate', link: 'login/patients' },
    { name: 'Doctor', icon: 'fas fa-chalkboard-Doctor', link: 'login/doctor' },
    { name: 'Admin', icon: 'fas fa-user-shield', link: 'login/admin' }
  ];

  username = '';
  password = '';
  selectedRole = '';

  selectRole(role: any) {
    this.selectedRole = role.name;
  }

  login() {
    console.log(`Logging in as ${this.selectedRole} with username: ${this.username}`);
    // Add actual login logic here
  }
}




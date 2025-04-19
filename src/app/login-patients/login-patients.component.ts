import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { LoginRegisterService } from '../services/login-register.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-patients',
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './login-patients.component.html',
  styleUrl: './login-patients.component.css'
})
export class LoginPatientsComponent {
email: string = "";
  pass: string = "";

  constructor(
    private loginRegisterService: LoginRegisterService
  ) {}

  onSubmit() {
    if (this.loginRegisterService.login(this.email,this.pass)) {
      alert('Login successful!');
      window.location.href="/Patients";

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



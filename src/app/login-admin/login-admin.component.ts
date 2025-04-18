import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRegisterService } from '../services/login-register.service';

@Component({
  selector: 'app-login-admin',
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
email: string = "";
pass: string = "";

  constructor(
    private loginRegisterService: LoginRegisterService
  ) {}

  onSubmit() {
    if (this.loginRegisterService.login(this.email,this.pass)) {
      alert('Login successful!');
      window.location.href="/admin";

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





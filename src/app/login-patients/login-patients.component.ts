import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { LoginRegisterService } from '../services/login-register.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

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
    private loginRegisterService: LoginRegisterService,
    private auth: AuthService,
    private router: Router
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

  onLogin() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res) => {
          this.auth.setToken(res.access_token);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          alert('Invalid credentials')
          console.log(error)
        }
      });
  }
}



import { Component } from '@angular/core';
import { LoginRegisterService } from '../services/login-register.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
    { name: 'Admin', icon: 'fas fa-user-shield' },
    { name: 'Doctor', icon: 'fas fa-chalkboard-Doctor' },
    { name: 'Patient', icon: 'fas fa-user-graduate' }
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
// email = '';
// password = '';

// constructor(private auth: AuthService, private router: Router) { }

// onLogin() {
//   this.auth.login({ email: this.email, password: this.password })
//     .subscribe({
//       next: (res) => {
//         this.auth.setToken(res.access_token);
//         this.router.navigate(['/dashboard']);
//       },
//       error: (error) => {
//         alert('Invalid credentials')
//         console.log(error)
//       }
//     });
// }
// }

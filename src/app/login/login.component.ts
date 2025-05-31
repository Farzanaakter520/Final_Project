import { Component } from '@angular/core';

import { AuthService } from '../core/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  // onLogin() {
  //   this.auth.login({ email: this.email, password: this.password })
  //     .subscribe({
  //       next: (res) => {
  //         this.auth.setToken(res.access_token);
  //         this.router.navigate(['/home']);
  //       },
  //       error: (error) => {
  //         alert('Invalid credentials')
  //         console.log(error)
  //       }
  //     });
  // }

  onLogin() {
    const loginData = { email: this.email, password: this.password };

    this.auth.login(loginData).subscribe({
      next: (res) => {
        // Set token
        this.auth.setToken(res.access_token);
        const role = this.auth.getUserRole();

        // Role-based navigation
        switch (role) {
          case 'admin':
            this.router.navigate(['/admin']);
            break;
          case 'doctor':
            this.router.navigate(['/doctor-dashboard']);
            break;
          case 'patient':
            this.router.navigate(['/patient-dashboard']);
            break;
          default:
            alert('Unknown role. Please contact support.');
        }
      },
      error: (error) => {
        // Handle errors
        alert('Invalid credentials');
        console.error(error);
      }
    });
  }
}
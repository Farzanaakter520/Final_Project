import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterRequest, UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: RegisterRequest = {
    email: '',
    password: '',
    role: 'PATIENT',
    name: '',
    phoneNumber: ''
  };
  confirmPassword = '';
  registrationSuccess = false;
  registrationError = '';

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  onSubmit() {
    if (this.user.password === this.confirmPassword) {
      this.userService.registerUser(this.user).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.registrationSuccess = true;
          this.registrationError = '';
          alert('Registration successful! Please log in.');
          this.router.navigate(['/']);
        },
        error: (error: Error) => {
          console.error('Registration error:', error.message);
          this.registrationError = error.message;
          this.registrationSuccess = false;
          alert(error.message);
        },
      });
    } else {
      this.registrationError = 'Passwords do not match.';
      this.registrationSuccess = false;
      alert('Passwords do not match.');
    }
  }
}

  // name = '';
  // phoneNumber = '';
  // email = '';
  // password = '';
  // role = '';

  // constructor(private auth: AuthService, private router: Router) { }

  // onRegister() {
  //   this.auth.register({name: this.name, phoneNumber: this.phoneNumber, email: this.email, password: this.password, role: this.role})
  //     .subscribe({
  //       next: (res) => {
  //         // this.auth.setToken(res.access_token);
  //         console.log(res);
  //         alert("Registration Successful!");
  //         this.router.navigate(['/login']);
  //       },
  //       error: (error) => {
  //         alert('Can not register!')
  //         console.log(error)
  //       }
  //     });
  // }



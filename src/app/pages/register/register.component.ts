import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  phoneNumber = '';
  email = '';
  password = '';
  role = '';

  constructor(private auth: AuthService, private router: Router) { }

  onRegister() {
    this.auth.register({name: this.name, phoneNumber: this.phoneNumber, email: this.email, password: this.password, role: this.role})
      .subscribe({
        next: (res) => {
          // this.auth.setToken(res.access_token);
          console.log(res);
          alert("Registration Successful!");
          this.router.navigate(['/login']);
        },
        error: (error) => {
          alert('Can not register!')
          console.log(error)
        }
      });
  }
}


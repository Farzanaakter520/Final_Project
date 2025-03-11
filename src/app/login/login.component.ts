import { Component } from '@angular/core';
import { LoginRegisterService } from '../services/login-register.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
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

}
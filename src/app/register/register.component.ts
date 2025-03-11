import { Component } from '@angular/core';
import { LoginRegisterService } from '../services/login-register.service';
import { Student } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  fname: string = '';
  mname: string = '';
  address: string = '';
  mobile: string = '';
  email: string = '';
  pass: string = '';

  constructor(
    private loginRegisterService: LoginRegisterService
  ) {}

  private userIdGenerator(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }

  saveStudent(){
    const student = new Student(
      this.userIdGenerator(), // Empty for the userId, this will be auto-generated in the service
      this.name,
      this.fname,
      this.mname,
      this.address,
      this.mobile,
      this.email,
      this.pass
    );

    const registerDone = this.loginRegisterService.register(student);

    if (registerDone) {
      alert('Registration successful!');
      // You can add code to reset the form here, or close the modal
      this.resetForm();
    } else {
      alert('Registration failed. Email already exists.');
    }
  }

  // Method to reset the form after submission
  resetForm() {
    this.name = '';
    this.fname = '';
    this.mname = '';
    this.address = '';
    this.mobile = '';
    this.email = '';
    this.pass = '';
  }
  

}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hospital-management';
}

  export class Patient {
    id: string;
    name: string;
    age: number;
    gender: string;
    bloodGroup: string; 
    address: string;
    phone: string;
    email: string;
    date: string;

    constructor(id: string, name: string, age: number, gender: string, bloodGroup: string, address: string, phone: string, email: string, date: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.bloodGroup = bloodGroup;
        this.address = address;
        this.phone = phone;
        this.email = email; 
        this.date = date;
    }
  }

  export class Appointment {
    id: number;
    name: string;
    email: string;
    appointmentDate: string;
    doctorId: number;
    patientId: number;

    constructor(id: number, name: string, email: string, appointmentDate: string, doctorId: number, patientId: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.appointmentDate = appointmentDate;
        this.doctorId = doctorId;
        this.patientId = patientId;
    }
  }

  export class Student {
    id: number;
    name: string;
    fatherName: string;
    motherName: string;
    address: string;
    mobileNo: string;
    email: string;
    password: string;

    constructor(id: number, name: string, fatherName: string, motherName: string, address: string, mobileNo: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.address = address;
        this.mobileNo = mobileNo;
        this.email = email;
        this.password = password;
    }
  }

  

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hospital-management';
}

  export class Patient {
    id: number;
    name: string;
    age: number;
    gender: string;
    address: string;
    phone: string;
    dateOfBirth: string;
    date: string;

    constructor(id: number, name: string, age: number, gender: string, address: string, phone: string, dateOfBirth: string, date: string) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = address;
      this.phone = phone;
      this.dateOfBirth = dateOfBirth;
      this.date = date;
    }
  }

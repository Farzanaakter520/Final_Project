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

  export class Doctor {
    doctor_id: number;
    name: string;
    specialty: string;
    age: number;
    gender: string;
    bloodGroup: string;
    address: string;
    phone: string;
    email: string;
    date: string;
    department: string;
    imageUrl: string;

    constructor() {
        this.doctor_id = 0;
        this.name = '';
        this.specialty = '';
        this.age = 0;
        this.gender = '';
        this.bloodGroup = '';
        this.address = '';
        this.phone = '';
        this.email = '';
        this.date = '';
        this.department = '';
        this.imageUrl = '';
        
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
  export class Writer {
    id: number;
    writerName: string;
    writerDept: string;
    writerFee: number;
    writerDegree: string;
    bookName: string;
    quantity: number;
    price: number;
    imageUrl: string;
  
    constructor(id: number, writerName: string,  bookName: string, writerDept: string, writerFee: number, writerDegree: string, quantity: number, price: number, imageUrl: string
    ) {
      this.id = id;
      this.writerName = writerName;
      this.bookName = bookName;
      this.writerDept = writerDept;
      this.writerFee = writerFee;
      this.writerDegree = writerDegree;
      this.quantity = quantity;
      this.price = price;
      this.imageUrl = imageUrl;
    }
  // constructor(id: number, writerName: string,  bookName: string, quantity: number, price: number, imageUrl: string
  // ) {
  //   this.id = id;
  //   this.writerName = writerName;
  //   this.bookName = bookName;
  //   this.quantity = quantity;
  //   this.price = price;
  //   this.imageUrl = imageUrl;
  // }
  }
  // export class Doctors{
  //   doctorId: number;
  //   doctorName: string;
  //   doctorDept: string;
  //   doctorFee: number;
  //   doctorDegree: string;
  //   isAvailable: boolean;
  
  
  //   constructor(
  //     doctorId: number,
  //   doctorName: string,
  //   doctorDept: string,
  //   doctorFee: number,
  //   doctorDegree: string,
  //   isAvailable: boolean
  //   ){
  //     this.doctorId = doctorId;
  //     this.doctorName = doctorName;
  //     this.doctorDept = doctorDept;
  //     this.doctorFee = doctorFee;
  //     this.doctorDegree = doctorDegree;
  //     this.isAvailable = isAvailable;
  //   }
  // }
  
  export class Catagory {
    id: number;
    name: string;
    description: string;
   
    price: number;
    imageUrl: string;
    constructor(id: number, name: string, description: string, quantity: number, price: number, imageUrl: string) {
      this.id = id;
      this.name = name;
      this.description = description;
     
      this.price = price;
      this.imageUrl = imageUrl;
    }
  }
  export class Catagory2 {
    id: number;
    name: string;
    description: string;
   
    price: number;
    imageUrl: string;
    constructor(id: number, name: string, description: string, quantity: number, price: number, imageUrl: string) {
      this.id = id;
      this.name = name;
      this.description = description;
     
      this.price = price;
      this.imageUrl = imageUrl;
    }
  }
  
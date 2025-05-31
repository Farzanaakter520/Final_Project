import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Catagory, Doctor, Writer } from '../app.component';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { User } from '../models/user';

@Component({
  selector: 'app-available-doctor',
  imports: [NgFor, NavbarComponent],
  templateUrl: './available-doctor.component.html',
  styleUrl: './available-doctor.component.css'
})
 export class AvailableDoctorComponent implements OnInit{
  doctor: Doctor[] = [];
 
 constructor(private router: Router, private userService: UserService) {}
 
 ngOnInit(): void {
   this.getDoctors();
 }
 
 getDoctors() {
   this.userService.getUserByRolePublic('DOCTOR').subscribe({
     next: (data) => {
       this.doctor = data;
       console.log(this.doctor);
     },
     error: (err) => console.error('Failed to load doctors:', err),
   });
 
  }

   makeAppointment(doctor: Doctor) {
    debugger
    this.router.navigate(['/addAppointment'], { state: { doctor } });
  }

  
 }
// 
// implements OnInit {
  
//   writerBooks: Writer[] = [];
//   catagoryBooks: Catagory [] = [];
//   carts: Writer[] = [];
  
//   ngOnInit(): void {
    
//     let allWriters = JSON.parse(localStorage.getItem('writers') || '[]');
//     this.writerBooks = allWriters;

//     let allCartItems = JSON.parse(localStorage.getItem('catagories') || '[]');
//     this.catagoryBooks = allCartItems;

//     let allCarts = JSON.parse(localStorage.getItem('cart') || '[]');
//     this.carts = allCarts;


//   }

//   addToCart(writer: Writer): void {
//     this.carts.push(writer);
//     localStorage.setItem('cart', JSON.stringify(this.carts));

//   }

// }


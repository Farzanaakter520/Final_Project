// prescription-medicine.component.ts
import { Component, OnInit } from '@angular/core';
import { NavbarPharmacyComponent } from "../navbar-pharmacy/navbar-pharmacy.component";
import {  Catagory2, Medicine } from '../app.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-prescription-medicine',
  templateUrl: './prescription-medicines.component.html',
  styleUrls: ['./prescription-medicines.component.css'],
  imports: [NavbarPharmacyComponent, NgFor]
})
export class PrescriptionMedicinesComponent implements OnInit {
  
  medicines: Medicine[] = [];
  catagoryBooks: Catagory2 [] = [];
  carts: Medicine[] = [];
  
  ngOnInit(): void {
    
    let allWriters = JSON.parse(localStorage.getItem('medicines') || '[]');
    this.medicines = allWriters;

    let allCartItems = JSON.parse(localStorage.getItem('catagories') || '[]');
    this.catagoryBooks = allCartItems;

    let allCarts = JSON.parse(localStorage.getItem('cart') || '[]');
    this.carts = allCarts;


  }

  // addToCart(writer: Medicine): void {
  //   this.carts.push(writer);
  //   localStorage.setItem('cart', JSON.stringify(this.carts));

  // }

}


  // medicines = [
  //   {
  //     name: 'Fluclox',
  //     image: 'https://cdn.osudpotro.com/thumb/medicine/fluclox-500-1631442367478.webp?w=640',
  //     price: 200,
  //     link: '/departments/endocrinology'
  //   },
  //   {
  //     name: 'Cardiology',
  //     image: 'https://cdn.osudpotro.com/thumb/medicine/ritch-50-ml1-1631424889466.webp?w=640',
  //     price: 250,
  //     link: '/departments/cardiology'
  //   },
  //   {
  //     name: 'Nephrology',
  //     image: 'https://cdn.osudpotro.com/thumb/medicine/febus-40-1716874167197.webp?w=640',
  //     price: 300,
  //     link: '/departments/nephrology'
  //   },
  //   {
  //     name: 'Neuro Surgery',
  //     image: 'https://cdn.osudpotro.com/thumb/medicine/anaflex-5003-1631426712690.webp?w=640',
  //     price: 180,
  //     link: '/departments/neuro-surgery'
  //   },
  //   {
  //     name: 'Dermatology',
  //     image: 'https://cdn.osudpotro.com/thumb/medicine/ebasten-10-1633333240018.webp?w=640',
  //     price: 150,
  //     link: '/departments/dermatology'
  //   }
  // ];

  // getDiscountedPrice(price: number): number {
  //   return price - price * 0.05;
  // }


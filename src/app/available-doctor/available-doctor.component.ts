import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Catagory, Writer } from '../app.component';

@Component({
  selector: 'app-available-doctor',
  imports: [NgFor],
  templateUrl: './available-doctor.component.html',
  styleUrl: './available-doctor.component.css'
})
export class AvailableDoctorComponent implements OnInit {
  
  writerBooks: Writer[] = [];
  catagoryBooks: Catagory [] = [];
  carts: Writer[] = [];
  
  ngOnInit(): void {
    
    let allWriters = JSON.parse(localStorage.getItem('writers') || '[]');
    this.writerBooks = allWriters;

    let allCartItems = JSON.parse(localStorage.getItem('catagories') || '[]');
    this.catagoryBooks = allCartItems;

    let allCarts = JSON.parse(localStorage.getItem('cart') || '[]');
    this.carts = allCarts;


  }

  addToCart(writer: Writer): void {
    this.carts.push(writer);
    localStorage.setItem('cart', JSON.stringify(this.carts));

  }

}


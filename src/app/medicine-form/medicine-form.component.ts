import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Medicine } from '../models/medicine';
import { MedicineService } from '../services/medicine.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-medicine-form',
  imports: [FormsModule, CommonModule, NgFor, NavbarComponent],
  templateUrl: './medicine-form.component.html',
  styleUrl: './medicine-form.component.css'
})
export class MedicineFormComponent implements OnInit {
  cartServeice = inject(CartService);
  carts: Medicine[] = [];

  medicines: Medicine[] = []; // Array to store books data
  medicine: Medicine = new Medicine(); // Object for form data
  isUpdate: boolean = false; // Flag to check if it’s update mode
  currentIndex: number | null = null; // To store the index of the medicine being edited


  constructor(private router: Router, private medicineService: MedicineService) { }

  ngOnInit(): void {

    this.medicineService.getMedicine().subscribe(medicines => {
      this.medicines = medicines;
    });

    // const medicinesFromStorage = localStorage.getItem('medicines');
    // if (medicinesFromStorage) {
    //   this.medicines = JSON.parse(medicinesFromStorage) as Medicine[];
    // }
    // console.log('Medicines:', this.medicines); // Check if medicines are loaded

    let allCarts = JSON.parse(localStorage.getItem('customers') || '[]');
    this.carts =allCarts;
  }

  onSubmit(): void {
    if (this.isUpdate && this.currentIndex !== null) {
      this.medicines[this.currentIndex] = { ...this.medicine }; // Replace the medicine at the given index
    } else {
      this.medicines.push(this.medicine); // Add a new medicine/book
    }

    localStorage.setItem('medicines', JSON.stringify(this.medicines)); // Save updated list to localStorage
    //call api
    this.medicineService.addMedicine(this.medicine).subscribe((data) => {
      this.medicine = new Medicine();
      this.isUpdate = false; // Reset update flag
      this.currentIndex = null; // Reset index
      alert("Successfull!")
    }, (error) => {
      console.log(error);
    });
  }

  // Reset the form after submission
  resetForm(): void {
    this.medicine = new Medicine();
    this.isUpdate = false; // Reset update flag
    this.currentIndex = null; // Reset index
    alert("Successfull!")
  }

  // Method to handle the update action for a medicine/book



   editMedicine(medicine: Medicine, index: number): void {
    this.medicine = { ...medicine }; // Copy the medicine's data into the form
    this.currentIndex = index; // Store the index for updating
    this.isUpdate = true; // Set the flag to indicate update mode
  }

  // Method to handle deleting a medicine/book from the list
  deleteMedicine(i: number): void {
    if (confirm('Are you sure you want to delete this medicine?')) {
      this.medicines.splice(i, 1); // Remove the medicine
      localStorage.setItem('medicines', JSON.stringify(this.medicines)); // Save the updated list
      alert('Medicine deleted successfully');
    }
  }


  // Method to display book details (this can be expanded as needed)
  detailsOfMedicine(medicine: Medicine): void {
    console.log('Medicine Details:', medicine);
    // You can add routing logic or additional functionality here
  }

  // addToCart(medicine: Medicine): void {

  //   this.carts.push(medicine);
  //   localStorage.setItem('cart', JSON.stringify(this.carts));
  // }

  // Track by function for *ngFor (helps with better performance)
  trackMedicine(index: number, medicine: Medicine): number {
    return medicine.medicine_id; // Using medicine's name as a unique identifier
  }
}

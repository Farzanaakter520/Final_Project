import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Doctor, Writer } from '../app.component';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-add-doctor',
  imports: [NavbarComponent, FormsModule, SidebarComponent,FormsModule, CommonModule, NgFor],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent implements OnInit {
  cartServeice = inject(CartService); 
  carts: Writer[] = [];

  writers: Writer[] = []; // Array to store books data
  writer: Writer = new Writer(0, '', '','',0,'',0,0, ''); // Object for form data
  isUpdate: boolean = false; // Flag to check if it’s update mode
  currentIndex: number | null = null; // To store the index of the writer being edited
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    const writersFromStorage = localStorage.getItem('writers');
    if (writersFromStorage) {
      this.writers = JSON.parse(writersFromStorage) as Writer[];
    }
    console.log('Writers:', this.writers); // Check if writers are loaded

    let allCarts = JSON.parse(localStorage.getItem('customers') || '[]');
    this.carts =allCarts;
  }

  onSubmit(): void {
    if (this.isUpdate && this.currentIndex !== null) {
      this.writers[this.currentIndex] = { ...this.writer }; // Replace the writer at the given index
    } else {
      this.writers.push(this.writer); // Add a new writer/book
    }
  
    localStorage.setItem('writers', JSON.stringify(this.writers)); // Save updated list to localStorage
    this.writer = new Writer(0, '', '','',0,'',0,0, '');
    this.isUpdate = false; // Reset update flag
    this.currentIndex = null; // Reset index
    alert("Successfull!")
  }
  
  // Reset the form after submission
  resetForm(): void {
    this.writer = new Writer(0, '', '','',0,'',0,0, '');
    this.isUpdate = false; // Reset update flag
    this.currentIndex = null; // Reset index
    alert("Successfull!")
  }

  // Method to handle the update action for a writer/book
  
  

   editWriter(writer: Writer, index: number): void {
    this.writer = { ...writer }; // Copy the writer's data into the form
    this.currentIndex = index; // Store the index for updating
    this.isUpdate = true; // Set the flag to indicate update mode
  }

  // Method to handle deleting a writer/book from the list
  deleteWriter(i: number): void {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.writers.splice(i, 1); // Remove the writer
      localStorage.setItem('writers', JSON.stringify(this.writers)); // Save the updated list
      alert('Doctor deleted successfully');
    }
  }
  

  // Method to display book details (this can be expanded as needed)
  detailsOfBook(writer: Writer): void {
    console.log('Book Details:', writer);
    // You can add routing logic or additional functionality here
  }

  // Method to add book to the cart (you can expand functionality as needed)
  addToCart(writer: Writer): void {

    this.carts.push(writer);
    localStorage.setItem('cart', JSON.stringify(this.carts));
    // Add to cart functionality can be added here
  }

  // Track by function for *ngFor (helps with better performance)
  trackWriter(index: number, writer: Writer): number {
    return writer.id; // Using writer's name as a unique identifier
  }
}

  // doctors: Doctor = new Doctor('','','',0,'','','','','','');
  //   isUpdate = false;
  
  //   constructor(private router: Router) {
  //     const nav = this.router.getCurrentNavigation();
  //     if (nav?.extras.state && nav.extras.state['doctor']) {
  //       this.doctors = nav.extras.state['doctor'];
  //       this.isUpdate = true;
  //     }
  //   }
  
  //   ngOnInit(): void {
  //     console.log('patient-informationComponent');
  //     if (!localStorage.getItem('doctors')) {
  //       localStorage.setItem('doctors', JSON.stringify([])); // Initialize empty patients array if none exists
  //     }
  //   }
  
  //   generateUniqueId(): string {
  //     return uuidv4(); // Generate unique ID using UUID
  //   }
  
  //   onSubmit() {
  //     let doctors: Doctor[] = JSON.parse(localStorage.getItem('doctors') || '[]');
  
  //     // If it's a new patient, generate a unique ID
  //     if (!this.isUpdate) {
  //       this.doctors.id = this.generateUniqueId(); // Assign unique ID to the new patient
  //     }
  
  //     if (this.isUpdate) {
  //       // If it's an update, replace the existing patient with the updated one
  //       doctors = doctors.map((doctor) => (doctor.id === this.doctors.id ? this.doctors : doctor));
  //     } else {
  //       // If it's a new patient, push it to the list
  //       doctors.push(this.doctors);
  //     }
  
  //     // Save the updated patients list back to localStorage
  //     localStorage.setItem('doctors', JSON.stringify(doctors));
  
  //     // Reset the form after submission
  //     this.doctors = new Doctor('','','',0,'','','','','','');
  
  //     // Navigate back to the patient list page
  //     //this.router.navigate(['/list']);
  //     alert('Doctor Information Saved Successfully');
  //   }



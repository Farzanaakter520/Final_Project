import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  imports: [FormsModule],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent implements OnInit {
  admin = {
    name: '',
    email: '',
    role: 'Admin'
  };

  ngOnInit(): void {
    this.loadAdminProfile();
  }

  loadAdminProfile(): void {
    // Simulated fetch from a service or API
    this.admin = {
      name: 'Farzana Akter Nilu',
      email: 'admin@example.com',
      role: 'Admin'
    };
  }

  updateProfile(): void {
    // Replace with real update logic
    alert('Profile updated successfully!');
    console.log('Updated admin info:', this.admin);
  }
}

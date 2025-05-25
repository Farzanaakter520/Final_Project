import { Component } from '@angular/core';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { Role, User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-add-user',
  imports: [SidebarComponent, FormsModule, CommonModule, NavbarComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  users: User = new User();

  roles = Object.values(Role);

  isUpdate = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    const nav = this.router.getCurrentNavigation();

    if (nav?.extras.state && nav.extras.state['a']) {
      this.users = nav.extras.state['a'];

      this.isUpdate = true;
    }
  }

  onSubmit(): void {
    if (this.isUpdate) {
      if (!this.users.email) {
        alert('Email is required to update the user.');
        return;
      }

      this.userService.updateUser(this.users.id, this.users).subscribe({
        next: () => {
          this.router.navigate(['/user-list']);
        },
        error: (err) => {
          alert('Failed to update user: ' + err.message);
          console.error(err);
        },
      });
    } else {
      console.log("add user clicked")
      this.userService.createUser(this.users).subscribe({
        next: () => {
          this.router.navigate(['/user-list']);
        },
        error: (err) => {
          alert('Failed to add user: ' + err.message);
          console.error(err);
        },
      });
    }
  }
}

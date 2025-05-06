import { Component, OnInit } from '@angular/core';

import { LoginComponent } from "../login/login.component";
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  userRole = '';
  showLogin = false;

  constructor(private auth: AuthService) { 
    this.showLogin = !this.auth.isAuthenticated();
  }

  ngOnInit(): void {
    this.userRole = this.auth.getUserRole();
  }

  logout() {
    this.auth.logout();
  }
  // isUserLoggedIn: boolean = false;
  // loggedinUserName: string = "";

  // constructor(
  //   private loggedinUserService: LoggedinUserService
  // ) {}

  // ngOnInit(): void {
  //   this.isUserLoggedIn = this.loggedinUserService.isLoggedIn();

  //   if (this.isUserLoggedIn) {
  //     const loggedInUser = this.loggedinUserService.getLoggedInUser();
  //     this.loggedinUserName = loggedInUser ? loggedInUser.name : ''; 
  //   }    
  // }

  // logoutBtn() {
  //   this.loggedinUserService.logout();
  //   window.location.href="/home"
  // }

}

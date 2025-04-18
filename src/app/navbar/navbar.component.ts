import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { LoggedinUserService } from '../services/loggedin-user.service';

@Component({
  selector: 'app-navbar',
  imports: [RegisterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isUserLoggedIn: boolean = false;
  loggedinUserName: string = "";

  constructor(
    private loggedinUserService: LoggedinUserService
  ) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.loggedinUserService.isLoggedIn();

    if (this.isUserLoggedIn) {
      const loggedInUser = this.loggedinUserService.getLoggedInUser();
      this.loggedinUserName = loggedInUser ? loggedInUser.name : ''; 
    }    
  }

  logoutBtn() {
    this.loggedinUserService.logout();
    window.location.href="/home"
  }

}

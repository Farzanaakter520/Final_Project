import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-common-view',
  imports: [ RouterOutlet,NgIf],
  templateUrl: './common-view.component.html',
  styleUrl: './common-view.component.css'
})
export class CommonViewComponent {
  role = '';

  constructor(private auth: AuthService) {
    this.role = auth.getUserRole();
    console.log(`Role in common view: ${this.role}`);
  }
}

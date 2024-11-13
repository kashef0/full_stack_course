import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-talwind-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './talwind-nav.component.html',
  styleUrl: './talwind-nav.component.css'
})
export class TalwindNavComponent {
    toggleMenu: boolean = true;
  toggleNavbar() {
    this.toggleMenu = !this.toggleMenu;
  }
} 

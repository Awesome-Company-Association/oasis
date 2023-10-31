import { Component } from '@angular/core';

@Component({
  selector: 'app-big-navbar',
  templateUrl: './big-navbar.component.html',
  styleUrls: ['./big-navbar.component.css']
})
export class BigNavbarComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

}

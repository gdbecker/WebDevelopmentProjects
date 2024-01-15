import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/Client';
import { AuthService } from '../../services/auth.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
  
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;
  
  constructor(
    private authService: AuthService,
    private settingsService: SettingsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
        this.loggedInUser = '';
      }
    });

    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick() {
    this.authService.logout();
    confirm("You are now logged out");
    this.router.navigate(['/login']);
  }
}

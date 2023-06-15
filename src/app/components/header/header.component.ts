import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {
    this.authService.loggedIn$.subscribe({
      next: value => {
        this.loggedIn = value
      }
    })
  }

  loggedIn: boolean = false;

}

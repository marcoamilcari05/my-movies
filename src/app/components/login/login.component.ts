import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  username: string = '';
  password: string = '';

  login = (e: any) => {
    e.preventDefault();
    console.log(`username: ${this.username}`);
    console.log(`password: ${this.password}`);

    const bodyForApi = {
      username: this.username,
      password: this.password
    }

    this.authService.labForWebLogin(bodyForApi).subscribe({
      next: response => {
        this.authService.loggedIn$
          .next(true);
        this.router.navigateByUrl('/dashboard');
      },
      error: err => alert(`Qualcosa è andato storto nella login`)
    })

  }

}

import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  users: User[] = [];

  constructor(private usersService: UsersService, private router: Router) {
    this.getUsersFromService();
  }

  getUsersFromService = () => {
    this.usersService.getUsers().subscribe({
      next: (response: any) => {
        console.log(response);
        this.users = response;
      } ,
      error: err => console.log(err),
      complete: () => console.log('ho finito')
    })
  }

  goToDetails = (user: User) => {
    this.usersService.userToShow$.next(user);
    this.router.navigateByUrl('/user-details');
  }

}

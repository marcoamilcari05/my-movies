import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {


  constructor(private usersService: UsersService) {
    this.usersService.userToShow$.subscribe({
      next: value => {
        this.user = value
      }
    })
  }

  user: User | undefined = undefined;

}

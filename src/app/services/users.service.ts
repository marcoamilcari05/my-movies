import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  userToShow$ = new BehaviorSubject<User | undefined>(undefined);

  getUsers = () => {
    return this.http.get('https://random-data-api.com/api/v2/users?size=12');
  }


}

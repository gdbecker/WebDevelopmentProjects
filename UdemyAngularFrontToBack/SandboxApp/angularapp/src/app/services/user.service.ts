import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
  
export class UserService {
  users: User[];
  data: Observable<Array<any>>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: "john@email.com",
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: "jane@email.com",
        isActive: false,
        registered: new Date('05/20/2014 11:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        email: "kevin@email.com",
        isActive: true,
        registered: new Date('10/07/2020 10:30:00'),
        hide: true,
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): void {
    this.users.unshift(user);
  }
}

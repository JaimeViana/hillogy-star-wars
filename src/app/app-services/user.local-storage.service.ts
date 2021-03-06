import { Injectable } from '@angular/core';
import { User } from '../../app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {

  constructor() { }

  registerUser(user: User) {
    let users = [user]

    if (localStorage.getItem('users') != null) {
      const currentUsers = JSON.parse(localStorage.getItem('users'));
      users = currentUsers.concat(users)
    }
    localStorage.setItem('users', JSON.stringify(users));
  }
}
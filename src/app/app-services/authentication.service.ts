import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;
  users: User[];

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users'));
  }

  checkIfRegistered(userInput: any): boolean {
    if (this.users.find(user => user.userName === userInput.userName && user.password === userInput.password)) {
      return true;
    } else {
      console.log('user not registered');
      return false;
    }
  }

  checkIfLogged(userInput: User): any {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    loggedUser.userName === userInput.userName && loggedUser.password === userInput.password ? true : false;
  }


}

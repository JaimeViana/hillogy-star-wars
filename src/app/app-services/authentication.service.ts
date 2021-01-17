import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;
  users: User[];

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')).map(user => new User(user));
  }


  checkIfRegistered(userInput: any): boolean {
    if (this.users.find(user => user.userName === userInput.userName && user.password === userInput.password)) {
      return true;
    } else {
      console.log('user not registered');
      return false;
    }
  }

  getRegisteredUser(userInput: any): User | null {
    const user = this.users.find((user: User) => user.userName === userInput.userName)
    return user.comparePassword(userInput.password) ? user : null;
  }

  checkIfLogged(userInput: User): any {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    return loggedUser.userName === userInput.userName && loggedUser.password === userInput.password ? true : false;
  }


}

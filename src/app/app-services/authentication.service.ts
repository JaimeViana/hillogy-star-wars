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


  checkIfRepeatedUsername(username: any): boolean {
    return (this.users.find(user => user.username === username)) ? true : false;
  }

  checkIfRegistered(userInput: any): boolean {
    if (this.users.find(user => user.username === userInput.username && user.password === userInput.password)) {
      return true;
    } else {
      return false;
    }
  }

  getRegisteredUser({ username, password }: { username: string, password: string }): User | null {
    console.log(username);

    const user = this.users.find((user: User) => user.username === username);
    console.log(user);

    return user.comparePassword(password) ? user : null;
  }

  checkIfLogged(userInput: User): any {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    return loggedUser.username === userInput.username && loggedUser.password === userInput.password ? true : false;
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLocalStorageService } from 'src/app/app-services/user.local-storage.service';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from '../../app-services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  users: User[];
  user: User;

  constructor(
    private userLocalStorageService: UserLocalStorageService,
    private authService: AuthenticationService,
    private router: Router) {
    this.form = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
    localStorage.setItem('loggedUser', JSON.stringify({}));
  }


  loginUser(user: User) {
    user = this.form.value;

    if (this.authService.checkIfRegistered(user)) {
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.router.navigate(['/ships']);
    } else {
      console.log('something went wrong');
    }
  }

  logOut() {
    localStorage.setItem('loggedUser', JSON.stringify({}));

  }
}

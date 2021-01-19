import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLocalStorageService } from 'src/app/app-services/user.local-storage.service';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';
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
    private authService: AuthenticationService,
    private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
    console.log(this.users);

    localStorage.setItem('loggedUser', JSON.stringify({}));
  }


  loginUser({ username, password }: { username: string, password: string }) {
    const registeredUser = this.authService.getRegisteredUser({ username, password });

    if (registeredUser !== false) {
      localStorage.setItem('loggedUser', JSON.stringify(registeredUser));
      this.showModal();
      this.router.navigate(['/ships']);
    } else {
      this.showError();
    }
  }

  showModal() {
    Swal.fire(
      "Nice to see you again, how are you?",
      "You have been successfully logged in!",
      "success"
    );
  }

  showError() {
    Swal.fire(
      "Nope, nope...",
      "You are not registered. Please, create an account.",
      "error"
    )
  }
}

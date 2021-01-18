import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserLocalStorageService } from '../../app-services/user.local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(
    public userLocalStorageService: UserLocalStorageService,
    private router: Router
  ) {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      attemptedPassword: new FormControl('')
    });
  }


  register() {
    const user = new User({
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      username: this.form.controls.username.value,
      password: this.form.controls.password.value
    });

    console.log(user);
    user.setHashedPassword(user.password);

    if (user.comparePassword(this.form.controls.attemptedPassword.value)) {
      this.userLocalStorageService.registerUser(user);
      this.router.navigate(['/login'])
    } else {
      console.log('Passwords do not match. Please, repeat your password.');
    }
  }

}

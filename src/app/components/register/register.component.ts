import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserLocalStorageService } from '../../app-services/user.local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(public userLocalStorageService: UserLocalStorageService) {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      userName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      attemptedPassword: new FormControl('')
    });
  }


  registerUser() {
    const user = new User({
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      userName: this.form.controls.userName.value,
      password: this.form.controls.password.value
    });

    if (user.comparePassword(this.form.controls.attemptedPassword.value)) {
      this.userLocalStorageService.registerUser(user);
    } else {
      console.log('Passwords do not match. Please, repeat your password.');
    }
  }

}

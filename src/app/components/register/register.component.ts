import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserLocalStorageService } from '../../app-services/user.local-storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/app/app-services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(
    public userLocalStorageService: UserLocalStorageService,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      attemptedPassword: new FormControl('', [Validators.required])
    });
  }


  register() {
    const user = new User({
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      username: this.form.controls.username.value,
      password: this.form.controls.password.value
    });

    user.setHashedPassword(user.password);

    if (this.authService.checkIfRepeatedUsername(user.username)) {
      this.showErrorUsername();
    } else if (user.comparePassword(this.form.controls.attemptedPassword.value)) {
      this.userLocalStorageService.registerUser(user);
      this.router.navigate(['/login']);
      this.showModal();
    } else {
      this.showErrorPassword();
    }
  }

  showModal() {
    Swal.fire(
      "Hi, welcome on board!",
      "You have been successfully registered!",
      "success"
    );
  }

  showErrorUsername() {
    Swal.fire(
      "Upsss! Sorry...",
      "This username has alredy be taken.",
      "error"
    )
  }

  showErrorPassword() {
    Swal.fire(
      "Upsss! Sorry...",
      "Passwords do not match. Please, repeat your password.",
      "error"
    )
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../app-services/authentication.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedUserGuardService implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  canActivate(): boolean {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    if (Object.entries(loggedUser).length === 0) {
      this.router.navigate(['/login']);
      return false
    } else {
      return true
    }
  }

}


import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/app-services/authentication.service';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  loggedUser: User;

  constructor() { }

  ngOnInit(): void {
  }

  showUserMenu() {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    return (Object.entries(loggedUser).length === 0) ? false : true;
  }

  logOut() {
    localStorage.setItem('loggedUser', JSON.stringify({}));
    this.showLogOut();
  }

  showLogOut() {
    Swal.fire(
      "Nice trip!!",
      "Hope to see you soon.",
      "success"
    )
  }
}

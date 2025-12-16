import { Component, inject, input, OnInit, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LoggedUserService } from '../../../core/services/logged-user/logged-user.service';
import { LoggedInUser } from '../../../core/models/loggedInUserData/logged-in-user.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private readonly loggedUserService = inject(LoggedUserService);
  isLogin = input<boolean>(true);
  loggedInUser = signal<LoggedInUser>({} as LoggedInUser);
  imgLoadin = signal<boolean>(false);

  ngOnInit(): void {
    initFlowbite();
    this.getLoggedInUserData();
  }

  getLoggedInUserData(): void {
    this.loggedUserService.getLoggedUserData().subscribe({
      next: (res) => {
        if (res.message === 'success') {
          this.imgLoadin.set(true);
          this.loggedInUser.set(res.user);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  signOut(): void {
    this.loggedUserService.signOutUser();
  }
}

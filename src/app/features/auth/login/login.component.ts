import { Component, inject, OnInit, signal } from '@angular/core';
import { form, Field } from '@angular/forms/signals';
import { Login } from '../model/login/login.interface';
import { initLogin } from '../model/login/login.init';
import { loginSchema } from '../model/login/login.schema';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [Field, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly toastrService = inject(ToastrService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);
  loginModel = signal<Login>(initLogin);
  loginForm = form(this.loginModel, loginSchema);
  isLoading = signal<boolean>(false);

  ngOnInit(): void {
    initFlowbite();
  }
  loginSubmit(): void {
    event?.preventDefault();
    if (this.loginForm().valid()) {
      this.isLoading.update((value) => true);
      this.authService.signInPost(this.loginForm().value()).subscribe({
        next: (res) => {
          if (res.message === 'success') {
            this.isLoading.update((value) => false);
            this.cookieService.set('token', res.token);
            this.toastrService.success('Loggedin Successfully');
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          console.log(err);
          this.isLoading.update((value) => false);
          this.toastrService.error(err.error.error);
        },
      });
    }
  }
}

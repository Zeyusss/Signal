import { Component, inject, signal } from '@angular/core';
import { initRegister } from '../model/register/register.init';
import { form, Field } from '@angular/forms/signals';
import { Register } from '../model/register/register.interface';
import { initFlowbite } from 'flowbite';
import { registerSchema } from '../model/register/register.schema';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [Field, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly toastrService = inject(ToastrService);
  private readonly router = inject(Router);
  registerModel = signal<Register>(initRegister);
  registerForm = form<Register>(this.registerModel, registerSchema);
  isLoading = signal<boolean>(false);

  ngOnInit(): void {
    initFlowbite();
  }
  registerSubmit(): void {
    event?.preventDefault();
    if (this.registerForm().valid()) {
      this.isLoading.update((value) => true);
      this.authService.signUpPost(this.registerForm().value()).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {
            this.isLoading.update((value) => false);
            this.toastrService.success('Accounted Created Successfully');
            this.router.navigate(['/login']);
          }
        },
        error: (err) => {
          this.toastrService.error(err.error.error);
          this.isLoading.update((value) => false);
        },
      });
    }
  }
}

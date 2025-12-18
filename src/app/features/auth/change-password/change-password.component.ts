import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { initChangePassword } from '../model/change-password/change-password.init';
import { form, Field } from '@angular/forms/signals';
import { Changepassword } from '../model/change-password/changepassword.interface';
import { changePasswordSchema } from '../model/change-password/change-password.schema';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoggedUserService } from '../../../core/services/logged-user/logged-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-password',
  imports: [Field],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  private readonly authService = inject(AuthService);
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly toastrService = inject(ToastrService);

  isLoading = signal<boolean>(false);

  subscribe: Subscription = new Subscription();

  changePasswordModel = signal<Changepassword>(initChangePassword);
  changePasswordForm = form<Changepassword>(this.changePasswordModel, changePasswordSchema);

  changePasswordSumbit(e: Event): void {
    e.preventDefault();
    if (this.changePasswordForm().valid()) {
      this.isLoading.update((vlaue) => true);
      this.subscribe.unsubscribe();
      this.subscribe = this.authService
        .changePasswordPatch(this.changePasswordForm().value())
        .subscribe({
          next: (res) => {
            console.log(res);
            if (res.message === 'success') {
              this.toastrService.success('Your has been changed');
              this.loggedUserService.signOutUser();
              this.isLoading.update((value) => false);
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

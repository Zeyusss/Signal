import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoggedUserService {
  private readonly httpClient = inject(HttpClient);
  private readonly cookieService = inject(CookieService);
  private readonly router = inject(Router);
  getLoggedUserData(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/users/profile-data`);
  }
  signOutUser(): void {
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }
}

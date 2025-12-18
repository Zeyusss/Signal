import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Login } from '../model/login/login.interface';
import { Register } from '../model/register/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);

  signInPost(data: Login): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/users/signin`, data);
  }
  signUpPost(data: Register): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/users/signup`, data);
  }
  changePasswordPatch(data: object): Observable<any> {
    return this.httpClient.patch(`${environment.baseUrl}/users/change-password`, data);
  }
}

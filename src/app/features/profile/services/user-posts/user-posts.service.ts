import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserPostsService {
  private readonly httpClient = inject(HttpClient);

  getAllUserPosts(userId: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/users/${userId}/posts?limit=2`);
  }
}

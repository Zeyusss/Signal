import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly httpClient = inject(HttpClient);

  creatPostPost(data: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/posts`, data);
  }
  getAllPosts(pageNumber: number = 1, limit: number = 50): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/posts?limit=${limit}&page=${pageNumber}`);
  }
}

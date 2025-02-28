import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public CurrentPost: any;

  public selectedAdminPost: any;

  public isCreatePost: boolean = false;

  public isClientEdit: boolean = false;

  public isAdminEdit: boolean = false;

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get('http://localhost:3000/api/track');
  }

  createPost(post: any): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/api/track', post);
  }

  getCurrentPost() {
    return this.http.get('http://localhost:3000/api/track');
  }

  updatePost(id: any, post: any) {
    return this.http.patch(`http://localhost:3000/api/track/${id}`, post);
  }

  deletePost(id: any) {
    return this.http.delete(`http://localhost:3000/api/track/${id}`);
  }

  getUsers() {
    return this.http.get('http://localhost:3000/api/users');
  }

  getAdminPost(userId: any) {
    return this.http.get(`http://localhost:3000/api/track/${userId}`);
  }
}

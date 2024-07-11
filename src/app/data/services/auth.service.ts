import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;

  public userName!: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/auth/sign-up', user);
  }

  logIn(user: User): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>('http://localhost:3000/api/auth/sign-in', user)
      .pipe(
        tap(({ token }) => {
          localStorage.setItem('auth-token', token);
          this.setToken(token);
          this.setNameToken(user.name);
          localStorage.setItem('user-name', user.name);
        })
      );
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  setNameToken(user: string) {
    this.userName = user;
  }

  getUserName() {
    return this.userName;
  }

  isAdmin(): boolean {
    return this.getUserName() === 'Admin';
  }

  isUser(): boolean {
    return this.getUserName() !== 'Admin';
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logOut() {
    this.setToken('');
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

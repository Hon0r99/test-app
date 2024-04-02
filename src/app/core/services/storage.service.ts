import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthData } from '../../pages/auth/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private USER_KEY = 'user';
  private userRoleSubject = new BehaviorSubject<string>(this.getUser().role);
  public userRole$ = this.userRoleSubject.asObservable();

  public saveUser(user: AuthData): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.userRoleSubject.next(user.role);
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    return !!user;
  }

  public getUser(): AuthData {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {} as AuthData;
  }

  public getToken(): string | null {
    const user = window.sessionStorage.getItem(this.USER_KEY);

    if (user) {
      return JSON.parse(user).token;
    }

    return null;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginPayload, AuthData } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'https://user-assessment-api.vercel.app/api';

  constructor(private http: HttpClient) {}

  public login(payload: LoginPayload): Observable<AuthData> {
    return this.http.post<AuthData>(`${this.API_URL}/login`, payload);
  }
}

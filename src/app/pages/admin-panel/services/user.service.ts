import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'https://user-assessment-api.vercel.app/api';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/users`);
  }
}

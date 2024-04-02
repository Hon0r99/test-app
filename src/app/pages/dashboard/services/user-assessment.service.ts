import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  UserAssessment,
  UserAssessmentGraph,
} from '../models/usser-assessment.model';

@Injectable({
  providedIn: 'root',
})
export class UserAssessmentService {
  private API_URL = 'https://user-assessment-api.vercel.app/api';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<UserAssessment[]> {
    return this.http.get<UserAssessment[]>(`${this.API_URL}/userassessments`);
  }

  getChart(id: string): Observable<UserAssessmentGraph> {
    let params = new HttpParams().set('id', id);
    return this.http.get<UserAssessmentGraph>(
      `${this.API_URL}/userassessments/graph`,
      { params }
    );
  }
}

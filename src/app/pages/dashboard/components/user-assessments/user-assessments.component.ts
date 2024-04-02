import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { UserAssessment } from '../../models/usser-assessment.model';
import { UserAssessmentService } from '../../services/user-assessment.service';
import { UserAssessmentReportModalComponent } from '../modals/user-assessment-report-modal/user-assessment-report-modal.component';

@Component({
  selector: 'app-user-assessments',
  templateUrl: './user-assessments.component.html',
  styleUrl: './user-assessments.component.scss',
})
export class UserAssessmentsComponent implements OnInit {
  public userAssessments$!: Observable<UserAssessment[]>;

  constructor(
    private userAssessmentsService: UserAssessmentService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userAssessments$ = this.userAssessmentsService.getAll();
  }

  openGraph(id: number) {
    this.dialog.open(UserAssessmentReportModalComponent, {
      data: {
        id: id,
      },
    });
  }
}

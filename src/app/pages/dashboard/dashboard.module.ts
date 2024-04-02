import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserAssessmentsComponent } from './components/user-assessments/user-assessments.component';
import { UserAssessmentReportModalComponent } from './components/modals/user-assessment-report-modal/user-assessment-report-modal.component';

@NgModule({
  declarations: [UserAssessmentsComponent, UserAssessmentReportModalComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
})
export class DashboardModule {}

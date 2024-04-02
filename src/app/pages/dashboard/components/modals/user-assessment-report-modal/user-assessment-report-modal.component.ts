import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chart, registerables } from 'chart.js';

import { UserAssessmentService } from '../../../services/user-assessment.service';
import { UserAssessmentGraph } from '../../../models/usser-assessment.model';

@Component({
  selector: 'app-user-assessment-report-modal',
  templateUrl: './user-assessment-report-modal.component.html',
  styleUrl: './user-assessment-report-modal.component.scss',
})
export class UserAssessmentReportModalComponent implements OnInit {
  public chart!: Chart;

  constructor(
    private userAssessmentService: UserAssessmentService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.userAssessmentService
      .getChart(this.data.id)
      .subscribe((graph: UserAssessmentGraph) => {
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: Object.keys(graph.data),
            datasets: [
              {
                data: Object.values(graph.data),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      });
  }
}

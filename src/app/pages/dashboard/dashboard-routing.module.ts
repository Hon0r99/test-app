import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAssessmentsComponent } from './components/user-assessments/user-assessments.component';

const routes: Routes = [
  {
    path: '',
    component: UserAssessmentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { UsersTableComponent } from './components/users-table/users-table.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [UsersTableComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
})
export class AdminPanelModule {}

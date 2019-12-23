import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDialogComponent } from './dashboard-dialog/dashboard-dialog.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  entryComponents: [DashboardDialogComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }

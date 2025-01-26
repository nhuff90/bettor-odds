import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/components/dashboard-home.component';
import { GetStartedComponent } from '../../pages/get-started/component/get-started.component';

const routes: Routes = [
  { path: '', component: DashboardHomeComponent }, // Default route
  { path: 'get-started', component: GetStartedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

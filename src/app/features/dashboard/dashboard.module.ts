import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { GetStartedComponent } from '../../pages/get-started/get-started.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        DashboardHomeComponent,
        GetStartedComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
    ],
})
export class DashboardModule { }

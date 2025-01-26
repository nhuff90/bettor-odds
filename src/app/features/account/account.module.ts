import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [AccountPageComponent, ChangePasswordComponent, ProfileDetailsComponent],
  exports: [AccountPageComponent]
})
export class AccountModule { }

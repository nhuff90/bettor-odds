import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { LegalRoutingModule } from './legal-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    TermsOfServiceComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule,
    SharedModule
  ]
})
export class LegalModule { }

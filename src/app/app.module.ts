import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { ProgramListComponent } from './program-list/program-list.component';
import { RulesComponent } from './rules/rules.component';
import { ArbitrageOpportunitiesComponent } from './arbitrage-opportunities/arbitrage-opportunities.component';
import { LayoutComponent } from './shared/layout/layout.component';  // Import the LayoutComponent


// Import Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';  // Added for the header
import { MatSidenavModule } from '@angular/material/sidenav';  // Added for the sidebar
import { FormsModule } from '@angular/forms';
import { OddsComponent } from './odds/odds.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event-detail/event-detail.component'; // For ngModel

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProgramListComponent,
    RulesComponent,
    ArbitrageOpportunitiesComponent,
    OddsComponent,
    EventComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    CustomMaterialModule.forRoot(),
    AppRoutingModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `http://my-api/logs`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel
    }),
    // Angular Material modules
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,  // For the top navbar
    MatSidenavModule,  // For the sidebar
    FormsModule // For two-way data binding (ngModel)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

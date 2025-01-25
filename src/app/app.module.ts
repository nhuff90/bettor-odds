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
import { ProgramListComponent } from './features/program-list/program-list.component';
import { RulesComponent } from './features/rules/rules.component';
import { LayoutComponent } from './shared/layout/layout.component';


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
import { OddsComponent } from './features/odds/odds.component';
import { EventComponent } from './features/event/event.component';
import { EventDetailComponent } from './features/event-detail/event-detail.component';
import { EventHeaderComponent } from './event-header/event-header.component';
import { FiltersComponent } from './features/filters/filters.component';
import { OddsTableComponent } from './odds-table/odds-table.component';
import { ArbitrageComponent } from './features/arbitrage/arbitrage.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProgramListComponent,
    RulesComponent,
    OddsComponent,
    EventComponent,
    EventDetailComponent,
    EventHeaderComponent,
    FiltersComponent,
    OddsTableComponent,
    ArbitrageComponent
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

import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MediaMatcher } from '@angular/cdk/layout';
import { NGXLogger } from 'ngx-logger';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { GlobalErrorHandler } from './services/globar-error.handler';
import { AdminGuard } from './guards/admin.guard';

// Add your services to the providers array
import { ArbitrageService } from './services/arbitrage.service';
import { MockOddsService } from './services/mock-odds.service';
import { NotificationService } from './services/notification.service';
import { OddsService } from './services/odds.service';
import { SpinnerService } from './services/spinner.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AdminGuard,
    MediaMatcher,
    ArbitrageService,
    MockOddsService,
    NotificationService,
    OddsService,
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    { provide: NGXLogger, useClass: NGXLogger },
    { provide: 'LOCALSTORAGE', useValue: window.localStorage }
  ],
  exports: [

  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

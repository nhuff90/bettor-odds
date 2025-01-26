import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { ProgramListComponent } from './features/program-list/components/program-list.component';
import { RulesComponent } from './features/rules/components/rules.component';
import { OddsComponent } from './features/odds/components/odds.component';
import { EventDetailComponent } from './features/event-detail/components/event-detail.component';
import { ArbitrageComponent } from './features/arbitrage/components/arbitrage.component';
import { GetStartedComponent } from './pages/get-started/component/get-started.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', // Redirect to the dashboard
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customers',
    loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'icons',
    loadChildren: () => import('./features/icons/icons.module').then(m => m.IconsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'typography',
    loadChildren: () => import('./features/typography/typography.module').then(m => m.TypographyModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'program-list',
    component: ProgramListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rules',
    component: RulesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'arbitrage',
    component: ArbitrageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'odds',
    component: OddsComponent
  },
  {
    path: 'event/:id',
    component: EventDetailComponent
  },
  {
    path: 'get-started',
    component: GetStartedComponent
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: 'legal',
    loadChildren: () => import('./pages/legal/legal.module').then(m => m.LegalModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

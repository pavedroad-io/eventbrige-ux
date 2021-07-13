import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { AuthGuard } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { ProviderListComponent } from './pages/provider-list/provider-list.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { SchedulerConfigComponent } from './pages/scheduler-config/scheduler-config.component';

const routes: Routes = [
  {
  path: '',
  component: AppComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'providerList',
  component: ProviderListComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'provider',
  component: ProviderComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'schedulerConfig',
  component: SchedulerConfigComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

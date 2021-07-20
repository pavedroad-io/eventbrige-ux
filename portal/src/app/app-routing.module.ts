import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { AuthGuard } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { ProviderListComponent } from './pages/provider-list/provider-list.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { SchedulerConfigComponent } from './pages/scheduler-config/scheduler-config.component';
import { S3loglistComponent } from './pages/sources/s3loglist/s3loglist.component';
import { S3logitemComponent } from './pages/sources/s3logitem/s3logitem.component';

import { LambdaListComponent } from './pages/triggers/lambda-list/lambda-list.component';
import { LambdaComponent } from './pages/triggers/lambda/lambda.component';
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
  path: 'provider/:id',
  component: ProviderComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'loglist',
  component: S3loglistComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'logitem/:id',
  component: S3logitemComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'logitem',
  component: S3logitemComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'lambdalist',
  component: LambdaListComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'lambdaitem/:id',
  component: LambdaComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'lambdaitem',
  component: LambdaComponent,
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

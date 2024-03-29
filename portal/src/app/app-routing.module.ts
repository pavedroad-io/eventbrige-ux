import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';



//import { DashboardComponent } from './dashboard/dashboard.component';
import { DeplomentComponent} from './pages/deploy/deploment/deploment.component';
import { DeploymentStatusComponent} from './pages/deploy/status/status.component';
import { DeleteDeploymentComponent } from './pages/deploy/delete/delete.component';
import { EolandingComponent } from './core/components/eolanding/eolanding.component';
import { SignupComponent } from './pages/customer/signup/signup.component';
import { EditWorkflowComponent } from './pages/workflows/edit.workflow/edit.workflow.component';
import { GettingstartedComponent } from './partners/wasabi/gettingstarted/gettingstarted.component';
import { LambdaListComponent } from './pages/triggers/lambda-list/lambda-list.component';
import { LambdaComponent } from './pages/triggers/lambda/lambda.component';
import { NewserviceComponent } from './pages/services/newservice/newservice.component';
import { ProviderListComponent } from './pages/provider-list/provider-list.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { SchedulerConfigComponent } from './pages/scheduler-config/scheduler-config.component';
import { S3loglistComponent } from './pages/sources/s3loglist/s3loglist.component';
import { S3logitemComponent } from './pages/sources/s3logitem/s3logitem.component';
import { SnsComponent } from './pages/sources/sns/sns.component';
import { SnslistComponent } from './pages/sources/snslist/snslist.component';
import { UsermgtComponent } from './pages/users/usermgt/usermgt.component';
import { ListAllSourcesComponent } from './pages/sources/list-all-sources/list-all-sources.component';
import { ListAllWorkflowsComponent } from './pages/workflows/list-all-workflows/list-all-workflows.component';
import { ListAllCodeComponent } from './pages/code/list-all-code/list-all-code.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'organization',
    component: SignupComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'usermgt/:id',
    component: UsermgtComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: EolandingComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'providerList',
    component: ProviderListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'provider',
    component: ProviderComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'provider/:id',
    component: ProviderComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'sources',
    component: ListAllSourcesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'organization',
    component: AppComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'schedulerConfig',
    component: SchedulerConfigComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'organization/:id',
    component: SignupComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'organization',
    component: SignupComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  /*
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
 */
  {
    path: 'newservice',
    component: NewserviceComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'loglist',
    component: S3loglistComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'logitem/:id',
    component: S3logitemComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'logitem',
    component: S3logitemComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'lambdalist',
    component: LambdaListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'lambdaitem/:id',
    component: LambdaComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'lambdaitem',
    component: LambdaComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'deploy',
    component: DeplomentComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'deploystatus',
    component: DeploymentStatusComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'deletedeployment',
    component: DeleteDeploymentComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'startwasabi',
    component: GettingstartedComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'snssource',
    component: SnsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'snssource/:id',
    component: SnsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'snslist',
    component: SnslistComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'code',
    component: ListAllCodeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'workflow',
    component: ListAllWorkflowsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'editWorkflow',
    component: EditWorkflowComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo:'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

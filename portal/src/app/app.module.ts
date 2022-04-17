import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';


// Material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


// Angular modules
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


// Http support
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

// Charting modules
import { ChartsModule } from 'ng2-charts';

// PR modules
import { CoreModule } from './core/core.module';
import { ProviderListComponent } from './pages/provider-list/provider-list.component';
import { SchedulerConfigComponent } from './pages/scheduler-config/scheduler-config.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { S3loglistComponent } from './pages/sources/s3loglist/s3loglist.component';
import { LambdaComponent } from './pages/triggers/lambda/lambda.component';
import { WorkerpoolComponent } from './pages/config/workerpool/workerpool.component';
import { WebhookComponent } from './pages/config/webhook/webhook.component';
import { S3logitemComponent } from './pages/sources/s3logitem/s3logitem.component';
import { LambdaListComponent } from './pages/triggers/lambda-list/lambda-list.component';
import { PrivacyComponent } from './pages/legal/privacy/privacy.component';
import { TermsComponent } from './pages/legal/terms/terms.component';
import { SignupComponent } from './pages/customer/signup/signup.component';
import { UsermgtComponent } from './pages/users/usermgt/usermgt.component';
import { HookComponent } from './core/components/events/hook/hook.component';
import { SecretComponent } from './core/components/k8s/secret/secret.component';
import { SharedModule } from './shared/shared.module';
import { MatCustomTableModule } from 'src/app/shared/components/mat-custom-table/mat-custom-table.module';

// Services
import { CustomerService } from './services/customers.service';
import { OrganizationService } from './services/organization.service';
import { ProfileService } from './services/profile.service';
import { PorttrackerService } from './services/porttracker.service';


import { DashboardComponent } from './dashboard/dashboard.component';
import { NewserviceComponent } from './pages/services/newservice/newservice.component';
import { SourceBreakdownComponent } from './charts/source-breakdown/source-breakdown.component';
import { SourcesComponent } from './charts/sources/sources.component';
import { EventsGenerateComponent } from './charts/events-generate/events-generate.component';
import { TriggersGeneratedComponent } from './charts/triggers-generated/triggers-generated.component';
import { ResourcesConsummedComponent } from './charts/resources-consummed/resources-consummed.component';
import { DeplomentComponent } from './pages/deploy/deploment/deploment.component';
import { DeploymentStatusComponent } from './pages/deploy/status/status.component';
import { DeleteDeploymentComponent } from './pages/deploy/delete/delete.component';
import { GettingstartedComponent } from './partners/wasabi/gettingstarted/gettingstarted.component';
import { MetadataComponent } from './pages/k8s/metadata/metadata.component';
import { KvpairComponent } from './pages/k8s/kvpair/kvpair.component';
import { KvpairListComponent } from './pages/k8s/kvpair-list/kvpair-list.component';
import { SecretListComponent } from './pages/k8s/secret-list/secret-list.component';
import { SnsComponent } from './pages/sources/sns/sns.component';
import { SnslistComponent } from './pages/sources/snslist/snslist.component';
import { AppMetadataComponent } from './schemas/app-metadata/app-metadata.component';
import { ListAllSourcesComponent } from './pages/sources/list-all-sources/list-all-sources.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProviderListComponent,
    SchedulerConfigComponent,
    ProviderComponent,
    S3loglistComponent,
    LambdaComponent,
    WorkerpoolComponent,
    WebhookComponent,
    S3logitemComponent,
    LambdaListComponent,
    PrivacyComponent,
    TermsComponent,
    SignupComponent,
    UsermgtComponent,
    HookComponent,
    SecretComponent,
    DashboardComponent,
    NewserviceComponent,
    SourceBreakdownComponent,
    SourcesComponent,
    EventsGenerateComponent,
    TriggersGeneratedComponent,
    ResourcesConsummedComponent,
    DeplomentComponent,
    DeploymentStatusComponent,
    DeleteDeploymentComponent,
    GettingstartedComponent,
    MetadataComponent,
    KvpairComponent,
    KvpairListComponent,
    SecretListComponent,
    SnsComponent,
    SnslistComponent,
    AppMetadataComponent,
    ListAllSourcesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: environment.Domain,
      clientId: environment.ClientID,

      // Request this audience at user authentication time
      audience: environment.Audience,

      // Request this scope at user authentication time
      scope: environment.Scope,

      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
        {
          // Match any request that starts 'https://pavedroad.us.auth0.com/api/v2/' (note the asterisk)
          uri: environment.Audience+'*',
          tokenOptions: {
            // The attached token should target this audience
            audience: environment.Audience,

            // The attached token should have these scopes
            scope: environment.Scope
          }
        }]
      }
    }),
    ChartsModule,
    CoreModule,
    FlexLayoutModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCustomTableModule

  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill', floatLabel: true, hideRequiredMarker: true}},
   { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

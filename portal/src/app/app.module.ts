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


// Angular modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Http support
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

// PR modules
import { CoreModule } from './core/core.module';
import { ProviderListComponent } from './pages/provider-list/provider-list.component';
import { SchedulerConfigComponent } from './pages/scheduler-config/scheduler-config.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
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

// Services
import { CustomerService } from './services/customers.service';
import { OrganizationService } from './services/organization.service';

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
    UsermgtComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
 //   DashboardComponent,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'pavedroad.us.auth0.com',
      clientId: 'mRgGOTIpgCKY8TRxcnvsRGxknKxut3RL',

      // Request this audience at user authentication time
      audience: 'https://pavedroad.us.auth0.com/api/v2/',

      // Request this scope at user authentication time
      scope: 'read:current_user',

      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
        {
          // Match any request that starts 'https://pavedroad.us.auth0.com/api/v2/' (note the asterisk)
          uri: 'https://pavedroad.us.auth0.com/api/v2/*',
          tokenOptions: {
            // The attached token should target this audience
            audience: 'https://pavedroad.us.auth0.com/api/v2/',

            // The attached token should have these scopes
            scope: 'read:current_user'
          }
        }]
      }
    }),
    CoreModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
   { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

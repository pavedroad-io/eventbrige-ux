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
import { LayoutModule } from '@angular/cdk/layout';

// Http support
import { HttpClientModule } from '@angular/common/http';

// PR modules
import { CoreModule } from './core/core.module';
import { ProviderListComponent } from './pages/provider-list/provider-list.component';
import { SchedulerConfigComponent } from './pages/scheduler-config/scheduler-config.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

// Services
import { CustomerService } from './services/customers.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProviderListComponent,
    SchedulerConfigComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
 //   DashboardComponent,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'pavedroad.us.auth0.com',
      clientId: 'mRgGOTIpgCKY8TRxcnvsRGxknKxut3RL'
    }),
    CoreModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

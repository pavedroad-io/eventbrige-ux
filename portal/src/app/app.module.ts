// Angular modules
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

// Http support
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule} from '@angular/router';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';


// Material modules

// Forms
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

// Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

//
// Layout
//
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';

//
// Buttons & Indicators
//

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

//
// Popups & Modals
//

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

//
// Data Table
//

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


// PR Common
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { MatCustomTableModule } from './shared/components/mat-custom-table/mat-custom-table.module';


//import { DashboardComponent } from './dashboard/dashboard.component';
import { DeplomentComponent} from './pages/deploy/deploment/deploment.component';
import { DeleteDeploymentComponent } from './pages/deploy/delete/delete.component';
import { DeploymentStatusComponent} from './pages/deploy/status/status.component';
import { EditWorkflowComponent } from './pages/workflows/edit.workflow/edit.workflow.component';
import { GettingstartedComponent } from './partners/wasabi/gettingstarted/gettingstarted.component';

import { LambdaComponent } from './pages/triggers/lambda/lambda.component';
import { LambdaListComponent } from './pages/triggers/lambda-list/lambda-list.component';
import { NewserviceComponent } from './pages/services/newservice/newservice.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { ProviderListComponent } from './pages/provider-list/provider-list.component';
import { S3logitemComponent } from './pages/sources/s3logitem/s3logitem.component';
import { S3loglistComponent } from './pages/sources/s3loglist/s3loglist.component';
import { SchedulerConfigComponent } from './pages/scheduler-config/scheduler-config.component';
import { SignupComponent  } from './pages/customer/signup/signup.component';
import { SnslistComponent } from './pages/sources/snslist/snslist.component';
import { SnsComponent } from './pages/sources/sns/sns.component';
import { UsermgtComponent } from './pages/users/usermgt/usermgt.component';
import { ListAllSourcesComponent } from './pages/sources/list-all-sources/list-all-sources.component';

import { ListAllCodeComponent } from './pages/code/list-all-code/list-all-code.component';
import { ListAllWorkflowsComponent } from './pages/workflows/list-all-workflows/list-all-workflows.component';

@NgModule({
  declarations: [
    AppComponent,
//    DashboardComponent,
    DeplomentComponent,
    DeleteDeploymentComponent,
    DeploymentStatusComponent,
    EditWorkflowComponent,
    GettingstartedComponent,
    LambdaComponent,
    LambdaListComponent,
    NewserviceComponent,
    ProviderComponent,
    ProviderListComponent,
    S3logitemComponent,
    S3loglistComponent,
    SchedulerConfigComponent,
    SignupComponent,
    SnsComponent,
    SnslistComponent,
    UsermgtComponent,
    ListAllCodeComponent,
    ListAllSourcesComponent,
    ListAllWorkflowsComponent
  ],
  imports: [
    CoreModule,
    MatCustomTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,

    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,

    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,

    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,

    MatPaginatorModule,
    MatSortModule,
    MatTableModule,

    // PR shared components

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
            uri: environment.Audience + '*',
            tokenOptions: {
              // The attached token should target this audience
              audience: environment.Audience,

              // The attached token should have these scopes
              scope: environment.Scope,
            },
          },
        ],
      },
    }),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
        floatLabel: true,
        hideRequiredMarker: true,
      },
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

// Angular modules
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Http support
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

// Charting modules
import { ChartsModule } from 'ng2-charts';

// PR modules
//import { CoreModule } from './core/core.module';
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
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';
import { DeleteDialogComponent } from './core/components/delete-dialog/delete-dialog.component';
import { EolandingComponent } from './core/components/eolanding/eolanding.component';
import { BackoffConfigComponent } from './core/components/events/backoff-config/backoff-config.component';
import { TreeSelectorComponent } from './core/components/filters/tree-selector/tree-selector.component';
import { MenuSelectorComponent } from './core/components/filters/menu-selector/menu-selector.component';
import { SearchSelectorComponent } from './core/components/filters/search-selector/search-selector.component';
import { ToggleSelectorComponent } from './core/components/filters/toggle-selector/toggle-selector.component';
import { ChipSelectorComponent } from './core/components/filters/chip-selector/chip-selector.component';
import { RangeSelectorComponent } from './core/components/filters/range-selector/range-selector.component';
import { RatingSelectorComponent } from './core/components/filters/rating-selector/rating-selector.component';

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
    ListAllSourcesComponent,
    NavigationComponent,
    NavigationBarComponent,
    ProfileComponent,
    DeleteDialogComponent,
    EolandingComponent,
    MetadataComponent,
    KvpairComponent,
    TreeSelectorComponent,
    MenuSelectorComponent,
    SearchSelectorComponent,
    ToggleSelectorComponent,
    ChipSelectorComponent,
    RangeSelectorComponent,
    RatingSelectorComponent,
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
    ChartsModule,
    FlexLayoutModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCustomTableModule,

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
  ],
  exports: [],
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
  entryComponents: [DeleteDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

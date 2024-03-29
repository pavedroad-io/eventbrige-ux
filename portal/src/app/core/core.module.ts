import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '@auth0/auth0-angular';

// Material modules
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';




import { BackoffConfigComponent } from './components/events/backoff-config/backoff-config.component';
import { ChipSelectorComponent } from './components/filters/chip-selector/chip-selector.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EolandingComponent } from './components/eolanding/eolanding.component';
import { HookComponent } from './components/events/hook/hook.component';
import { KvpairComponent } from './components/datatypes/kvpair/kvpair.component';
import { MetadataComponent } from './components/k8s/metadata/metadata.component';
import { MenuSelectorComponent } from './components/filters/menu-selector/menu-selector.component';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RangeSelectorComponent } from './components/filters/range-selector/range-selector.component';
import { RatingSelectorComponent } from './components/filters/rating-selector/rating-selector.component';
import { SearchSelectorComponent } from './components/filters/search-selector/search-selector.component';
import { SecretComponent } from './components/k8s/secret/secret.component';
import { ToggleSelectorComponent } from './components/filters/toggle-selector/toggle-selector.component';
import { TreeSelectorComponent } from './components/filters/tree-selector/tree-selector.component';

@NgModule({
  declarations: [
    BackoffConfigComponent,
    ChipSelectorComponent,
    DeleteDialogComponent,
    EolandingComponent,
    HookComponent,
    KvpairComponent,
    MetadataComponent,
    MenuSelectorComponent,
    NavigationBarComponent,
    NavigationComponent,
    ProfileComponent,
    RangeSelectorComponent,
    RatingSelectorComponent,
    SearchSelectorComponent,
    SecretComponent,
    ToggleSelectorComponent,
    TreeSelectorComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatChipsModule,
    MatSelectModule,
    MatBadgeModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,

//    RouterTestingModule
  ],
  exports: [
    BackoffConfigComponent,
    ChipSelectorComponent,
    DeleteDialogComponent,
    EolandingComponent,
    HookComponent,
    KvpairComponent,
    MetadataComponent,
    MenuSelectorComponent,
    NavigationBarComponent,
    NavigationComponent,
    ProfileComponent,
    RangeSelectorComponent,
    RatingSelectorComponent,
    SearchSelectorComponent,
    SecretComponent,
    ToggleSelectorComponent,
    TreeSelectorComponent,
  ],
  providers: [],
  entryComponents: [DeleteDialogComponent],
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';

import { NgForm, FormsModule, FormBuilder, FormGroup, FormControl, Validators, FormArray, FormGroupDirective, } from '@angular/forms';


import { NavigationComponent } from './components/navigation/navigation.component';

import { ProfileComponent } from './components/profile/profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AuthService } from '@auth0/auth0-angular';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EolandingComponent } from './components/eolanding/eolanding.component';
import { MetadataComponent } from './components/k8s/metadata/metadata.component';
import { KvpairComponent } from './components/datatypes/kvpair/kvpair.component';
import { BackoffConfigComponent } from './components/events/backoff-config/backoff-config.component';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationBarComponent,
    ProfileComponent,
    DeleteDialogComponent,
    EolandingComponent,
    MetadataComponent,
    KvpairComponent,
    BackoffConfigComponent,
  ],
  imports: [
    FormsModule,
    CommonModule, 
    MaterialModule, 
    LayoutModule, 
    RouterModule
  ],
  exports: [MaterialModule, NavigationComponent, RouterModule],
  providers: [],
  entryComponents: [DeleteDialogComponent],
})
export class CoreModule {}

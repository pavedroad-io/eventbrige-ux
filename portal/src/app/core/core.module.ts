import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../share/material/material.modules';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AuthService } from '@auth0/auth0-angular';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EolandingComponent } from './components/eolanding/eolanding.component';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationBarComponent,
    ProfileComponent,
    DeleteDialogComponent,
    EolandingComponent,
  ],
  imports: [CommonModule, MaterialModule, LayoutModule, RouterModule],
  exports: [MaterialModule, NavigationComponent, RouterModule],
  providers: [],
  entryComponents: [DeleteDialogComponent],
})
export class CoreModule {}

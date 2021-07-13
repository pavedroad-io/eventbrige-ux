import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../share/material/material.modules';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
	declarations: [
		NavigationComponent,
		SocialLoginComponent,
		NavigationBarComponent
	],
  imports: [
		CommonModule,
		MaterialModule,
		LayoutModule,
		RouterModule
	],
	exports: [
		MaterialModule,
		NavigationComponent,
		SocialLoginComponent,
		RouterModule
	],
	providers: []
})

export class CoreModule { }

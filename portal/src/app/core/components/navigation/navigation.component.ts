import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
	eventSourceMenueItems = [
		{title: "S3 Buckets", icon: "cloud_circle", route: ""},
		{title: "Azure events", icon: "bolt", route: ""},
		{title: "Slack", icon: "chat", route: ""},
	];

	dashboardsMenuItems = [
		{title: "Activity", icon: "build", route: ""},
		{title: "Providers", icon: "build", route: ""},
		{title: "Functions", icon: "build", route: ""},
		{title: "Workflows", icon: "build", route: ""},
	];

	TriggersActionsMenuItems = [
		{title: "Functions", icon: "flight_takeoff", route: ""},
		{title: "Workflows", icon: "pageview", route: ""},
	];

	configureMenuItems = [
		{title: "Providers", icon: "apps", route: "providerList"},
		{title: "Schedules", icon: "apps", route: "schedulerConfig"},
	];

	public APP_TOOLBAR_TITLE = "Components";
	// Use the name of the variable created in the template
	// Rename this right and left side nav
	@ViewChild('navigationSidenav', {static: true})
	public sidenav: MatSidenav;

  constructor(private router: Router) {}

	toggle() {
		this.sidenav.toggle();
	}

	public openNewServiceWizard() {
		this.toggle();
		this.router.navigate(['wizard']);
	}

	public openComponent(route: string) {
    // Close side nav
		this.toggle();

    // Route to new view
		this.router.navigate([route]);
	}


}

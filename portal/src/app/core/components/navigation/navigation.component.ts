import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  eventSourceMenueItems = [
    {
      title: 'S3 Buckets',
      icon: 'cloud_circle',
      route: 'loglist',
      disabled: false,
    },
    { title: 'Azure events', icon: 'bolt', route: '', disabled: true },
    { title: 'Slack', icon: 'chat', route: '', disabled: true },
  ];

  tirggerSourceMenuItems = [
    {
      title: 'AWS Lambda',
      icon: 'cloud_circle',
      route: 'lambdalist',
      disabled: false,
    },
    { title: 'GitHub actions', icon: 'bolt', route: '', disabled: true },
  ];

  dashboardsMenuItems = [
    { title: 'Activity', icon: 'build', route: '', disabled: true },
    { title: 'Providers', icon: 'build', route: '', disabled: true },
    { title: 'Functions', icon: 'build', route: '', disabled: true },
    { title: 'Workflows', icon: 'build', route: '', disabled: true },
  ];

  TriggersActionsMenuItems = [
    { title: 'Functions', icon: 'flight_takeoff', route: '', disabled: true },
    { title: 'Workflows', icon: 'pageview', route: '', disabled: true },
  ];

  configureMenuItems = [
    {
      title: 'Providers',
      icon: 'apps',
      route: 'providerList',
      disabled: false,
    },
    {
      title: 'Schedules',
      icon: 'apps',
      route: 'schedulerConfig',
      disabled: false,
    },
  ];

  createMenuItems = [
    { title: 'Functions', icon: 'apps', route: '/', disabled: false },
    { title: 'Workflows', icon: 'apps', route: 'workflowList', disabled: true },
    {
      title: 'Microservices',
      icon: 'apps',
      route: 'microserviceList',
      disabled: true,
    },
  ];

  public APP_TOOLBAR_TITLE = 'Components';
  // Use the name of the variable created in the template
  // Rename this right and left side nav
  @ViewChild('navigationSidenav', { static: true })
  public sidenav: MatSidenav;

  constructor(private router: Router) {}

  toggle() {
    this.sidenav.toggle();
  }

  public openComponent(route: string) {
    // Close side nav
    // this.toggle();

    // Route to new view
    this.router.navigate([route]);
  }
}

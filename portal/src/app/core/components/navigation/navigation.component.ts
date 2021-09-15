import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import {
  NavigationEnd,
  Router,
  ActivatedRoute,
  ParamMap,
} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  // Query params
  //pid: any;  // Partner ID

  eventSourceMenueItems = [
    {
      title: 'S3 Buckets',
      icon: 'cloud_circle',
      route: 'loglist',
      disabled: false,
    },
    { title: 'Azure events', icon: 'bolt', route: '', disabled: false },
    { title: 'Slack', icon: 'chat', route: '', disabled: false },
  ];

  tirggerSourceMenuItems = [
    {
      title: 'AWS Lambda',
      icon: 'cloud_circle',
      route: 'lambdalist',
      disabled: false,
    },
    { title: 'GitHub actions', icon: 'bolt', route: '', disabled: false },
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

  deployMenuItems = [
    {
      title: 'Deploy changes',
      icon: 'cloud_upload',
      route: '/deploy',
      disabled: false,
    },
    {
      title: 'Deployment status',
      icon: 'monitor_heart',
      route: '/deploystatus',
      disabled: false,
    },
    {
      title: 'Delete deployment',
      icon: 'cloud_off',
      route: '/deletedeployment',
      disabled: false,
    },
  ];

  // Use the name of the variable created in the template
  // Rename this right and left side nav
  @ViewChild('navigationSidenav', { static: true })
  public sidenav: MatSidenav;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const pid = this.route.snapshot.queryParamMap.get('pid');
    if (pid == 'wasabi') {
      console.log(pid);
      this.router.navigate(['startwasabi']);
    }
  }

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

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

// PR Services
import { EventSourcesService } from 'src/app/services/event.sources.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  allSources: any[] = Array(0);
  allTriggers: any[] = Array(0);
  allWorkflows: any[] = Array(0);
  allFunctions: any[] = Array(0);

  defaultsSources: string[] = ['SNS', 'S3', 'SQS'];
  defaultsTriggers: string[] = ['lambda'];
  defaultsWorkflows: string[] = ['argo'];
  defaultsFunctions: string[] = ['knative'];

  // Use the name of the variable created in the template
  // Rename this right and left side nav
  @ViewChild('navigationSidenav', { static: true })
  public sidenav: MatSidenav;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventSourceService: EventSourcesService
  ) {
    const data: any[] = this.eventSourceService.getServices();

    data.forEach((item) => {
      if (item.type === 'source_event') {
        this.allSources.push(item.service);
      }
    });

    data.forEach((item) => {
      if (item.type === 'trigger_event') {
        this.allTriggers.push(item.service);
      }
    });

    data.forEach((item) => {
      if (item.type === 'workflow') {
        this.allWorkflows.push(item.service);
      }
    });

    data.forEach((item) => {
      if (item.type === 'function') {
        this.allFunctions.push(item.service);
      }
    });

  }

  ngOnInit() {
    const pid = this.route.snapshot.queryParamMap.get('pid');
    if (pid == 'wasabi') {
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

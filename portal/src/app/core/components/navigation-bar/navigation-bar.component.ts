import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

import { ProfileService } from '../../../services/profile.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  private returnUrl = '/';
  private rightSidenav: boolean = true;
  public profile: any = {};
  public APP_TOOLBAR_TITLE = 'Event Orchestrator';

  constructor(
    private router: Router,
    public leftNav: NavigationComponent,
    public auth: AuthService,
    private profileSvc: ProfileService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }

  ngAfterViewInit(): void {
    this.profileSvc.share.subscribe((data: any) => {
      this.profile = data;
    });
  }

  toggleView(viewName: string) {
    this.disableAll();
    switch (viewName.toLowerCase()) {
      case 'sources':
        this.canViewSources();
        break;
      case 'triggers':
        this.canViewTriggers();
        break;
      case 'workflow':
        this.canViewWorkflow();
        break;
      case 'code':
        this.canViewCode();
        break;
      case 'market':
        this.canViewMarket();
        break;
      default:
        console.log('Unknown view name ', viewName);
    }
  }

  disableAll() {
    this.leftNav.canViewMarket =
      this.leftNav.canViewCode =
      this.leftNav.canViewWorkflows =
      this.leftNav.canViewTriggers =
      this.leftNav.canViewSources =
        false;
  }

  gotoOrg() {
    if (
      this.profile.app_metadata.customer_id != undefined &&
      this.profile.app_metadata.customer_id != ''
    ) {
      let r = 'organization/' + this.profile.app_metadata.customer_id;
      this.router.navigate([r]);
    }
  }

  gotoUsers() {
    if (
      this.profile.app_metadata.customer_id != undefined ||
      this.profile.app_metadata.customer_id === ''
    ) {
      let r = 'usermgt/' + this.profile.app_metadata.customer_id;
      this.router.navigate([r]);
    }
  }

  toggleSideNav() {
    this.leftNav.toggle();
  }

  canViewSources() {
    this.leftNav.canViewSources = true;
    this.router.navigate(['/sources']);
  }

  canViewTriggers() {
    this.leftNav.canViewTriggers = true;
    this.router.navigate(['lambdalist']);
  }

  canViewMarket() {
    this.leftNav.canViewMarket = true;
    this.router.navigate(['newservice']);
  }

  canViewWorkflow() {
    this.leftNav.canViewWorkflows = true;
    this.router.navigate(['workflow']);
  }

  canViewCode() {
    this.leftNav.canViewCode = true;
    this.router.navigate(['code']);
  }

  ngOnInit(): void {}

  public logout() {
    this.auth.logout({ returnTo: document.location.origin });
  }
}

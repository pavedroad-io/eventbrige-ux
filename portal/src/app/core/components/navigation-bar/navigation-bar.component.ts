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
  public profile;
  public APP_TOOLBAR_TITLE = 'PavedRoad.io';

  constructor(
    private router: Router,
    public rightNav: NavigationComponent,
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

  gotoOrg() {
    if (
      this.profile.app_metadata.customer_id != undefined ||
      this.profile.app_metadata.customer_id === ''
    ) {
      let r = 'organization/' + this.profile.app_metadata.customer_id;
      this.router.navigate([r]);
    } else {
      this.router.navigate(['organization']);
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
    this.rightNav.toggle();
  }

  ngOnInit(): void {}

  public logout() {
    this.auth.logout({ returnTo: document.location.origin });
  }
}

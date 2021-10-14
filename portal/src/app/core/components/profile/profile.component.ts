import { Component, OnInit, Directive, AfterViewInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../../services/customers.service';
import { environment } from '../../../../environments/environment';
import { NavigationEnd, Router } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  fullProfile: any = {};
  userdata: any = {};
  appdata: any = {};

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private cs: CustomerService,
    private router: Router,
    private profileSvc: ProfileService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    sleep(2000).then(() => {
      this.profileSvc.share.subscribe((data: any) => {
        this.profile = data;
        if (this.profile.app_metadata == undefined) {
          // This is a new client get the org information so it can be saved
          this.router.navigate(['organization']);
        } else {
          this.cs.getCustomer(this.profile.app_metadata.eventbrid_config_id);
	  // TODO: Route to the last page they used or dashboard
          let r = 'organization/' + this.profile.app_metadata.customer_id;
//          this.router.navigate([r]);
        }
      });
    });
  }

  getProfile(): any {
    if (this.fullProfile != undefined) {
      return this.fullProfile.app_metadata;
    } else {
      return '';
    }
  }
}

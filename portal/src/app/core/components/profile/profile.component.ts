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
    this.profileSvc.share.subscribe((data: any) => {

      this.fullProfile = this.profileSvc.fullProfile;
      if (this.profileSvc.fullProfile == undefined) {
        return;
      }

      console.log('yes fulprofil: ');
      if (this.profileSvc.fullProfile.app_metadata == undefined) {
        let r = 'organization/';
        this.router.navigate([r]);
      } else {
        console.log('EB configuration missing or in progress');
        this.cs.getCustomer(this.profileSvc.fullProfile.app_metadata.eventbrid_config_id);
      }
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
